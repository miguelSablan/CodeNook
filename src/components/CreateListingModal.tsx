import React, { useState } from "react";
import { z } from "zod";

const listingSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.array(z.string()).min(1, "Tags are required"),
  role: z.string().min(1, "Role is required"),
});

type ListingData = z.infer<typeof listingSchema>;

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "UI/UX Designer",
  "Project Manager",
  "Game Developer",
  "Mobile App Developer"
];

const CreateListingModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [role, setRole] = useState("");

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

    const formData: ListingData = {
      title,
      description,
      tags,
      role,
    };

    const validation = listingSchema.safeParse(formData);
    if (!validation.success) {
      console.error(
        validation.error.errors.map((err) => err.message).join(", ")
      );
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
      if (document) {
        (
          document.getElementById("create_listing_modal") as HTMLDialogElement
        ).close();
      }

      // Reset the form fields
      setTitle("");
      setDescription("");
      setTags([]);
      setNewTag("");
      setRole("");
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
        <h3 className="font-bold text-xl text-white">Create New Listing</h3>
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
            <select
              className="select select-bordered w-full"
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
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Create
            </button>
            <form method="dialog">
              <button className="btn btn-secondary">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default CreateListingModal;
