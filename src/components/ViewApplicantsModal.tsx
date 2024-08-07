interface Applicant {
  id: number;
  name: string;
  profilePic: string;
}

interface ViewApplicantsModalProps {
  applicants: Applicant[];
}

function ViewApplicantsModal({ applicants }: ViewApplicantsModalProps) {
  return (
    <dialog id="view_applicants_modal" className="modal">
      <div className="modal-box bg-[#242323] relative">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-xl text-white">Applicants</h3>
        <div className="space-y-4 mt-4">
          {/* Applicants List */}
          {applicants.length > 0 ? (
            <ul className="space-y-2">
              {applicants.map((applicant) => (
                <li
                  key={applicant.id}
                  className="flex items-center p-3 bg-gray-800 rounded-lg"
                >
                  <img
                    src={applicant.profilePic}
                    alt={applicant.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <p className="text-white text-lg font-semibold flex-1">
                    {applicant.name}
                  </p>
                  <button className="btn btn-neutral ml-4">Accept</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">No applicants yet.</p>
          )}
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ViewApplicantsModal;
