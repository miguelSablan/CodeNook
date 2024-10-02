import { useState } from "react";
import { z } from "zod";

interface EditProfileModalProps {
  userFullName: string;
  userName: string;
  userEmail: string;
  userImage: string;
  userBio: string;
  userSkills: string[];
}

const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  bio: z.string().optional(),
  skills: z.array(z.string()).optional(),
});

type ProfileData = z.infer<typeof profileSchema>;

export default function EditProfileModal({
  userFullName,
  userName,
  userEmail,
  userImage,
  userBio,
  userSkills,
}: EditProfileModalProps) {
  const [name, setName] = useState(userFullName);
  const [username, setUsername] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [image, setImage] = useState(userImage);
  const [bio, setBio] = useState(userBio);
  const [skills, setSkills] = useState<string[]>(userSkills);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [newSkill, setNewSkill] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData: ProfileData = {
      name,
      username,
      email,
      bio,
      skills,
    };

    // Validate form data
    const validation = profileSchema.safeParse(formData);
    if (!validation.success) {
      setError(validation.error.errors.map(err => err.message).join(", "));
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/profile/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedProfile = await response.json();
        console.log("Profile updated successfully:", updatedProfile);
        setSuccess("Profile updated successfully!");
      } else {
        const errorData = await response.json();
        console.error("Failed to update profile:", errorData);
        setError(errorData.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("An error occurred while updating the profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box bg-[#242323] relative">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl text-white">Edit Profile</h3>
        <div className="space-y-4">
          {/* Error and Success Messages */}
          {error && <p className="text-error">{error}</p>}
          {success && <p className="text-success">{success}</p>}

          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full text-black"
            />
          </div>

          {/* Username Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered w-full text-black"
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full text-black"
            />
          </div>

          {/* Bio Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Bio</span>
            </label>
            <textarea
              placeholder="Enter a brief bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="textarea textarea-bordered w-full text-black"
            ></textarea>
          </div>

          {/* Skills Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Skills</span>
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Add Skills"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="input input-bordered flex-grow text-black"
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddSkill}
              >
                Add
              </button>
            </div>
            <div className="mt-2 space-x-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-2 py-1 bg-gray-700 rounded-lg"
                >
                  <span className="text-white">{skill}</span>
                  <button
                    type="button"
                    className="ml-2 text-white"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="modal-action">
            <button
              type="button"
              className={`btn btn-primary`}
              onClick={handleSubmit}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
