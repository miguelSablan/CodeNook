import { useState, useEffect } from "react";
import { z } from "zod";

interface Author {
  name: string;
  avatarUrl: string;
}

interface Project {
  id: number;
  date: string;
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
        <h3 className="font-bold text-xl text-white">Edit Listing</h3>
        <div className="space-y-4">
          {/* Title Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
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
              placeholder="Enter a brief description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered w-full"
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
                placeholder="Add Tag"
                className="input input-bordered flex-grow"
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
                  className="inline-flex items-center px-2 py-1 bg-gray-700 rounded-lg"
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
            <input
              type="text"
              placeholder="Role"
              className="input input-bordered w-full"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          {/* Modal Actions */}
          <div className="modal-action">
            <button
              type="button"
              className={`btn btn-primary`}
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default EditListingModal;
