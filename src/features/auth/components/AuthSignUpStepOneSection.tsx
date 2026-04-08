const AuthSignUpStepOneSection = () => {
  return (
    <div className="w-[360px]" style={{ fontFamily: "Inter, sans-serif" }}>
      <label
        htmlFor="signup-email"
        className="block h-[17px] w-[360px] text-[14px] leading-[100%]"
        style={{ fontWeight: 500, color: "#3D3D3D" }}
      >
        Email*
      </label>

      <div className="mt-[8px] flex h-[48px] w-[360px] items-center gap-[10px] rounded-[8px] border-[1.5px] border-[#D1D1D1] bg-white px-[13px] py-[12px] pr-[15px]">
        <input
          id="signup-email"
          type="email"
          placeholder="you@example.com"
          className="h-full w-full border-0 bg-transparent p-0 text-[14px] leading-[100%] text-[#141414] outline-none placeholder:text-[#8A8A8A]"
          style={{ fontWeight: 500 }}
        />
      </div>

      <button
        type="button"
        className="mt-[16px] flex h-[47px] w-[360px] items-center justify-center gap-[10px] rounded-[8px] bg-[#4F46E5] p-[10px] text-[16px] leading-[100%] text-white"
        style={{ fontWeight: 500 }}
      >
        Next
      </button>

      <div className="mt-[16px] flex h-[46px] w-[360px] flex-col gap-[8px]">
        <div className="flex items-center">
          <span className="h-px flex-1 bg-[#E5E5E5]" />
          <span
            className="px-[8px] text-[14px] leading-[100%] text-[#A3A3A3]"
            style={{ fontWeight: 500 }}
          >
            or
          </span>
          <span className="h-px flex-1 bg-[#E5E5E5]" />
        </div>

        <p className="text-center text-[14px] leading-[100%] text-[#666666]">
          Already have an account?{" "}
          <button
            type="button"
            className="text-[14px] leading-[100%] text-[#141414] underline"
            style={{ fontWeight: 500 }}
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthSignUpStepOneSection;
