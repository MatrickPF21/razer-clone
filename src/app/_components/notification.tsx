type NotificationProps = {
  children: React.ReactNode;
};

export default function Notification({ children }: NotificationProps) {
  return (
    <section className='font-roboto bg-[#555] px-8 pb-2 pt-3 text-center text-sm text-white'>
      <p>{children}</p>
    </section>
  );
}
