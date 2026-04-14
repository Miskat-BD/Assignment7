import { LuPlus } from 'react-icons/lu';

const Banner = () => {
    
    return (
        <div className='text-center my-12 space-y-4'>
            <h1 className='text-3xl md:text-5xl font-bold text-[#1F2937]'>Friends to keep close in your life</h1>
            <p className='text-[#64748B] mb-3.5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'><LuPlus/> Add a Friend</button>

            
        </div>
    );
};

export default Banner;