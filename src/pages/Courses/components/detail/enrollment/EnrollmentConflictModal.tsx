import AuthModalShell from "../../../../../features/auth/components/AuthModalShell";

type EnrollmentConflictModalProps = {
  message: string;
  conflictingCourseName?: string;
  conflictingSchedule?: string;
  isSubmitting: boolean;
  onCancel: () => void;
  onContinue: () => void;
};

const EnrollmentConflictModal = ({
  message,
  conflictingCourseName,
  conflictingSchedule,
  isSubmitting,
  onCancel,
  onContinue,
}: EnrollmentConflictModalProps) => {
  const conflictText = conflictingCourseName && conflictingSchedule
    ? `You are already enrolled in ${conflictingCourseName} with the same schedule: ${conflictingSchedule}`
    : message || "Schedule conflict detected.";

  return (
    <AuthModalShell
      onClose={onCancel}
      closeAriaLabel="Close schedule conflict warning"
      closeOnOverlayClick
      panelClassName="p-[26px]"
      contentClassName="gap-[16px]"
      overlayClassName="backdrop-blur-[2px]"
    >
      <h3 className="w-[360px] text-[28px] font-[600] leading-[100%] tracking-[0] text-[#3D3D3D]">
        Schedule Conflict
      </h3>
      <p className="w-[360px] text-[18px] font-[500] leading-[140%] tracking-[0] text-[#525252]">
        {conflictText}
      </p>
      <div className="flex w-[360px] justify-end gap-[8px]">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="rounded-[8px] border border-[#958FEF] px-[16px] py-[12px] text-[16px] font-[500] leading-[100%] tracking-[0] text-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-60"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onContinue}
          disabled={isSubmitting}
          className="rounded-[8px] bg-[#4F46E5] px-[16px] py-[12px] text-[16px] font-[500] leading-[100%] tracking-[0] text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          Continue Anyway
        </button>
      </div>
    </AuthModalShell>
  );
};

export default EnrollmentConflictModal;
