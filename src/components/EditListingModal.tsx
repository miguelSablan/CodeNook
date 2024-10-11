import { useState, useEffect } from "react";
import { z } from "zod";

interface Author {
  name: string;
  image: string;
}

interface Project {
  id: number;
  createdAt: string;
  title: string;
  description: string;
  tags: string[];
  role: string;
  author: Author;
}

interface EditListingModalProps {
  project: Project | null;
}

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.array(z.string()).min(1, "Tags are required"),
  role: z.string().min(1, "Role is required"),
});

type ProjectData = z.infer<typeof projectSchema>;

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Project Manager",
  "Game Developer",
  "Mobile App Developer",
];

function EditListingModal({ project }: EditListingModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [role, setRole] = useState("");
  const [newTag, setNewTag] = useState("");

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description || "");
      setTags(project.tags || []);
      setRole(project.role);
    }
  }, [project]);

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData: ProjectData = {
      title,
      description,
      tags,
      role,
    };

    const validation = projectSchema.safeParse(formData);
    if (!validation.success) {
      console.error(
        validation.error.errors.map((err) => err.message).join(", ")
      );
      return;
    }

    console.log("Updated project:", formData);

    if (document) {
      (
        document.getElementById("edit_listing_modal") as HTMLDialogElement
      ).close();
    }
  };

  return (
    <dialog id="edit_listing_modal" className="modal">
      <div className="modal-box bg-[#242323] relative">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-2xl text-white">Edit Listing</h3>
        <p className="text-sm text-gray-400">Edit your project details.</p>
        <div className="space-y-4">
          {/* Title Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Project Title</span>
            </label>
            <input
              type="text"
              placeholder="Project title"
              className="input input-bordered input-primary w-full bg-transparent focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
            <textarea
              placeholder="Project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered textarea-primary w-full bg-transparent h-36 resize-none focus:outline-none"
            ></textarea>
          </div>

          {/* Tags Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Tags</span>
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Add relevant tags (e.g., React, Python)"
                className="input input-bordered input-primary flex-grow bg-transparent focus:outline-none"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddTag}
              >
                Add
              </button>
            </div>
            <div className="mt-2 space-x-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-primary rounded-full cursor-pointer text-sm"
                >
                  <span className="text-white">{tag}</span>
                  <button
                    type="button"
                    className="ml-2 text-white"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Role Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Role</span>
            </label>
            <select
              className="select select-bordered select-primary w-full bg-[#242323] focus:outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>
                Select a role
              </option>
              {roles.map((r, index) => (
                <option key={index} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Modal Actions */}
          <div className="modal-action flex w-full">
            <form method="dialog" className="w-1/2">
              <button className="btn btn-ghost w-full">Cancel</button>
            </form>
            <button
              type="button"
              className={"btn btn-primary w-1/2"}
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default EditListingModal;
