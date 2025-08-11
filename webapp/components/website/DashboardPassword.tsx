import { useForm } from "react-hook-form";

type FormData = {
  password: string;
  confirmPassword: string;
};

const DashboardPassword = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const password = watch("password", "");

  const checkStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) score++;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score++;
    if (/\d/.test(pass)) score++;
    return score;
  };

  const score = checkStrength(password);

  const getColor = (index: number) => {
    if (index >= score) return "bg-grey-150";
    if (score <= 1) return "bg-error-500";
    if (score === 2) return "bg-yellow-500";
    if (score === 3) return "bg-primary-300";
    return "bg-primary-400";
  };

  const onSubmit = (data: FormData) => {
    console.log("Password changed:", data);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:bg-white-100 lg:rounded-[16px] lg:p-6"
      >
        <span className="text-[22px] font-medium text-black-400">رمز عبور</span>
        <div className="h-px bg-grey-200 w-full mb-6 mt-4 lg:my-6"></div>
        <span className="text-[16px] text-black-400">
          رمز عبور شما حداقل باید 8 حرف باشد.
        </span>
        <div className="mt-6 flex flex-col gap-2">
          <label className="flex gap-2 items-center">
            <span className="text-grey-400">رمز عبور جدید</span>
            {score < 2 && <span className="text-error-500">*</span>}
          </label>
          <input
            type="password"
            {...register("password")}
            className="lg:w-[360px] h-12 bg-white-100 lg:bg-grey-50 rounded-lg px-3"
          />
        </div>
        <div className="mt-8 flex gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded ${getColor(i)}`}
            ></div>
          ))}
        </div>
        <ul className="mt-8 flex flex-col gap-[15px]">
          <li className="flex gap-2 items-center">
            <span
              className={`${
                score > 0 ? "bg-primary-500" : "bg-error-500"
              } size-1.5 rounded-full`}
            ></span>
            <span className="text-grey-400">
              رمز عبور شما باید حداقل 8 حرف باشد.
            </span>
          </li>
          <li className="flex gap-2 items-center">
            <span
              className={`${
                score > 1 ? "bg-primary-500" : "bg-error-500"
              } size-1.5 rounded-full`}
            ></span>
            <span className="text-grey-400">
              شامل علامت {`( /[!@#$%^&*(),.?":{}|<>]/</> )`}
            </span>
          </li>
          <li className="flex gap-2 items-center">
            <span
              className={`${
                score > 2 ? "bg-primary-500" : "bg-error-500"
              } size-1.5 rounded-full`}
            ></span>
            <span className="text-grey-400">شامل حروف بزرگ باشد</span>
          </li>
          <li className="flex gap-2 items-center">
            <span
              className={`${
                score > 3 ? "bg-primary-500" : "bg-error-500"
              } size-1.5 rounded-full`}
            ></span>
            <span className="text-grey-400">شامل عدد باشد</span>
          </li>
        </ul>
        <div className="mt-6 flex flex-col gap-2">
          <label className="flex gap-2 items-center">
            <span className="text-grey-400">تکرار رمز عبور</span>
            {score < 2 && <span className="text-error-500">*</span>}
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password ||
                "تکرار رمز عبور با رمز عبور اصلی مطابقت ندارد",
            })}
            className="lg:w-[360px] h-12 bg-white-100 lg:bg-grey-50 rounded-lg px-3"
          />
          {errors.confirmPassword && (
            <span className="text-error-500 mt-2">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="mt-10 w-full flex justify-end">
          <button
            className="bg-primary-500 rounded-[7px] h-10 px-8 flex items-center text-[16px] font-medium text-white-500"
            type="submit"
          >
            تغییر رمز عبور
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashboardPassword;
