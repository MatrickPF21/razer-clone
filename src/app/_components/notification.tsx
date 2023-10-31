type NotificationProps = {
  children: React.ReactNode;
};

export default function Notification({ children }: NotificationProps) {
  return (
    <section className='bg-[#555] text-center font-roboto text-[14px] font-normal leading-[20px] tracking-[-0.01px] text-white'>
      <div className='container pb-[9.5px] pl-[30px] pr-[24px] pt-[11.5px]'>
        <p>{children}</p>
      </div>
    </section>
  );
}
