"use client";

export default function ProductSpecsSection() {
  return (
    <section id='specs' className='bg-[#252525] pt-12 font-roboto'>
      <article className='container max-w-[1200px] px-[1.125rem]'>
        <h2 className='mb-6 text-[1.3125rem] uppercase leading-[1.1em]'>
          Tech Specs
        </h2>
        <table className='w-full overflow-hidden'>
          <tbody>
            <tr className='flex flex-wrap border-b border-[#6c757d] pb-5'>
              <th className='mb-[.625rem] w-full pb-[.625rem] pr-6 pt-[1.875rem] text-start text-[.875rem] font-bold uppercase'>
                Form Factor
              </th>
              <td className='w-full py-[.625rem] pr-6 text-[.875rem] text-[#999]'>
                Right-handed
              </td>
            </tr>
            <tr className='flex flex-wrap border-b border-[#6c757d] pb-5'>
              <th className='mb-[.625rem] w-full pb-[.625rem] pr-6 pt-[1.875rem] text-start text-[.875rem] font-bold uppercase'>
                Connectivity
              </th>
              <td className='w-full py-[.625rem] pr-6 text-[.875rem] text-[#999]'>
                <ul className='ml-4 list-outside list-disc'>
                  <li>Razer™ HyperSpeed Wireless</li>
                  <li>Bluetooth</li>
                  <li>Wired – Speedflex Cable USB Type C</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
}
