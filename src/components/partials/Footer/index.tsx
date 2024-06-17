import Title from "@/components/UI/Title"

const Footer = () => {
  return (
    <footer className='w-full h-40 px-[70px] grid mt-10 bg-[#F5F5F7]'>
      <div className="flex justify-between items-center">
      <Title title="Apple (France)" level="3" />
      <p>Copyright @2024</p>
      </div>
    </footer>
  )
}

export default Footer