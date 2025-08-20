import Image from "next/image";
import ContactForm from "@/components/website/ContactForm";

const ContactUs = () => {
  return (
    <div className="container xl:mt-10 flex flex-col-reverse xl:flex-row xl:gap-6">
      <div>
        {/* texts in desktop view */}
        <div className="xl:block hidden">
          <h2 className="text-black-400 font-bold xl:text-[28px]">
            اگر انتقادو پیشنهادی دارید میتونید با ما درمیون بزارید
          </h2>
          <p className="text-grey-400 xl:text-[16px] xl:mt-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان لازم است،
          </p>
        </div>
        <ContactForm />
      </div>
      <div className="xl:flex-shrink-0 w-full flex justify-center xl:block xl:w-[525px] xl:h-[710px] mt-10 xl:mt-0 -z-10 top-[30px] relative">
        <Image
          priority
          className="w-[296px] h-[404px] xl:w-[525px] xl:h-[710px]"
          alt="contact-us"
          width={525}
          height={710}
          src="/images/contact-us-image.png"
        />
      </div>
      {/* texts in mobile view */}
      <div className="xl:hidden flex flex-col gap-6 mt-10">
        <h2 className="text-black-400 font-bold text-[22px] xl:text-[28px] text-center">
          اگر انتقادو پیشنهادی دارید میتونید با ما درمیون بزارید
        </h2>
        <p className="text-grey-400 text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان لازم است،
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
