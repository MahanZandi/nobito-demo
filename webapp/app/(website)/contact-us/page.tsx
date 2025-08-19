import Image from "next/image";
import ContactForm from "@/components/website/ContactForm";

const ContactUs = () => {
  return (
    <div className="container xl:mt-10 flex xl:flex-row gap-6">
      <div>
        <h2 className="text-black-400 font-bold xl:text-[28px]">
          اگر انتقادو پیشنهادی دارید میتونید با ما درمیون بزارید
        </h2>
        <p className="text-grey-400 xl:text-[16px] xl:mt-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان لازم است،
        </p>
        {/* TODO create contact form */}
        <ContactForm />
      </div>
      <div className="flex-shrink-0 xl:w-[505px] xl:h-[689px] relative">
        <Image
          priority
          className="xl:w-[505px] xl:h-[689px]"
          alt="contact-us"
          width={505}
          height={689}
          src="/images/contact-us-image.png"
        />
      </div>
    </div>
  );
};

export default ContactUs;
