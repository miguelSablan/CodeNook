import { useState } from "react";

interface EditProfileModalProps {
  userFullName: string;
  userName: string;
  userEmail: string;
  userImage: string;
  userBio: string;
}

export default function EditProfileModal({
  userFullName,
  userName,
  userEmail,
  userImage,
  userBio,
}: EditProfileModalProps) {
  const [name, setName] = useState(userFullName);
  const [username, setUsername] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [image, setImage] = useState(userImage);
  const [bio, setBio] = useState(userBio);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box bg-[#242323] relative">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl text-white">Edit Profile</h3>
        <form className="space-y-4">
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
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
            />
          </div>

          {/* Profile Picture Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Profile Picture</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full"
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
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Modal Actions */}
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
