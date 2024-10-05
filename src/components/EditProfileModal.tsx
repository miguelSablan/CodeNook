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
  const [newSkill, setNewSkill] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData: ProfileData = {
      name,
      username,
      email,
      bio,
      skills,
    };

    const validation = profileSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((error) => {
        fieldErrors[error.path[0] as string] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    setErrors({});
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
        setSuccess("Profile updated successfully!");
      } else {
        const errorData = await response.json();
        setErrors({ general: errorData.error || "Failed to update profile" });
      }
    } catch (error) {
      setErrors({ general: "An error occurred while updating the profile." });
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
          {errors.general && <p className="text-error">{errors.general}</p>}
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
              className="input input-bordered input-primary w-full bg-transparent focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
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
              className="input input-bordered input-primary w-full bg-transparent focus:outline-none"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
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
              className="input input-bordered input-primary w-full bg-transparent focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
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
              className="textarea textarea-bordered textarea-primary w-full bg-transparent h-32 resize-none focus:outline-none"
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
                className="input input-bordered input-primary flex-grow bg-transparent focus:outline-none"
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
                  className="inline-flex items-center px-3 py-1 bg-primary rounded-full cursor-pointer text-sm"
                >
                  <span>{skill}</span>
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
