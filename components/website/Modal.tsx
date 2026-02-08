import * as AlertDialog from "@radix-ui/react-alert-dialog";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  exitText: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  exitText,
  description,
  title,
}) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={(state) => !state && onClose()}>
      {/* <AlertDialog.Trigger asChild>
        <button className="px-4 py-2 bg-primary-500 text-white-500 rounded">
          خروج از حساب کاربری
        </button>
      </AlertDialog.Trigger> */}
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/40" />
        <AlertDialog.Content className="fixed top-1/2 left-1/2 focus:outline-none bg-body p-4 min-w-[330px] lg:p-8 xl:w-[887px] rounded-2xl lg:rounded-3xl -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-center lg:justify-between">
            <AlertDialog.Title className="text-[22px]">
              {title}
            </AlertDialog.Title>
            <AlertDialog.Cancel asChild>
              <button className="isax isax-close-circle text-[32px] text-black-450 cursor-pointer lg:block hidden"></button>
            </AlertDialog.Cancel>
          </div>

          <div className="h-px bg-grey-200 w-full mt-4 mb-6 lg:mb-8"></div>
          <AlertDialog.Description className="text-[16px] text-center lg:text-xl mb-8 text-grey-500 ">
            {description}
          </AlertDialog.Description>
          <div className="grid grid-cols-2 lg:flex lg:justify-end gap-3">
            <AlertDialog.Cancel asChild>
              <button className="flex min-w-[128px] text-[16px] items-center justify-center border rounded-[7px] h-10 text-black-400 cursor-pointer">
                انصراف
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                onClick={onClose}
                className="flex min-w-[128px] text-[16px] items-center justify-center bg-primary-500 rounded-[7px] h-10 text-white cursor-pointer"
              >
                {exitText}
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default Modal;
