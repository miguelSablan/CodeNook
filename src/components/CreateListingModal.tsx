import React, { useState } from "react";
import { z } from "zod";

const listingSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  role: z.string().min(1, "Role is required"),
});

type ListingData = z.infer<typeof listingSchema>;

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Project Manager",
  "Game Developer",
  "Mobile App Developer",
];

const CreateListingModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [role, setRole] = useState("");

  // Error state for individual fields
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [tagsError, setTagsError] = useState("");
  const [roleError, setRoleError] = useState("");

  // Add tag functionality
  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  // Remove tag functionality
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData: ListingData = {
      title,
      description,
      tags,
      role,
    };

    const validation = listingSchema.safeParse(formData);

    if (!validation.success) {
      // Reset all error states
      setTitleError("");
      setDescriptionError("");
      setTagsError("");
      setRoleError("");

      // Set specific error messages based on validation errors
      validation.error.errors.forEach((err) => {
        switch (err.path[0]) {
          case "title":
            setTitleError(err.message);
            break;
          case "description":
            setDescriptionError(err.message);
            break;
          case "tags":
            setTagsError(err.message);
            break;
          case "role":
            setRoleError(err.message);
            break;
          default:
            break;
        }
      });
      return;
    }

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error creating listing:", errorData.error);
        return;
      }

      const createdProject = await response.json();
      console.log("New listing created:", createdProject);

      // Close the modal after successful creation
      const modal = document.getElementById(
        "create_listing_modal"
      ) as HTMLDialogElement;
      if (modal) {
        modal.close();
      }

      // Reset the form fields
      setTitle("");
      setDescription("");
      setTags([]);
      setNewTag("");
      setRole("");
      setTitleError("");
      setDescriptionError("");
      setTagsError("");
      setRoleError("");
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <dialog id="create_listing_modal" className="modal">
      <div className="modal-box bg-[#242323] relative">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-2xl">Launch your Project</h3>
        <p className="text-sm text-gray-400">
          Share your project to connect with developers.
        </p>
        <div className="space-y-4">
          {/* Title Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Project Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter your project title"
              className={`input input-bordered input-primary w-full bg-transparent focus:outline-none ${
                titleError && "input-error"
              }`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {titleError && (
              <p className="text-red-500 text-sm mt-1">{titleError}</p>
            )}
          </div>

          {/* Description Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Project Description</span>
            </label>
            <textarea
              placeholder="Provide a brief overview of your project"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`textarea textarea-bordered textarea-primary w-full bg-transparent h-36 resize-none focus:outline-none ${
                descriptionError && "textarea-error"
              }`}
            ></textarea>
            {descriptionError && (
              <p className="text-red-500 text-sm mt-1">{descriptionError}</p>
            )}
          </div>

          {/* Tags Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Skill Tags</span>
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Add relevant tags (e.g., React, Python)"
                className={`input input-bordered input-primary flex-grow bg-transparent focus:outline-none ${
                  tagsError && "input-error"
                }`}
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
            {tagsError && (
              <p className="text-red-500 text-sm mt-1">{tagsError}</p>
            )}
            <div className="mt-2 space-x-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-primary rounded-full cursor-pointer text-sm"
                >
                  <span>{tag}</span>
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
              <span className="label-text">Role</span>
            </label>
            <select
              className={`select select-bordered select-primary w-full bg-[#242323] focus:outline-none ${
                roleError && "select-error"
              }`}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>
                Select the role needed for your project
              </option>
              {roles.map((r, index) => (
                <option key={index} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {roleError && (
              <p className="text-red-500 text-sm mt-1">{roleError}</p>
            )}
          </div>

          {/* Modal Actions */}
          <div className="modal-action flex w-full">
            <form method="dialog" className="w-1/2">
              <button className="btn btn-ghost w-full">Cancel</button>
            </form>
            <button
              type="button"
              className="btn btn-primary w-1/2"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default CreateListingModal;
