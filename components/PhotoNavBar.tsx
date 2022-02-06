import Link from 'next/link';

import { FiGithub } from 'react-icons/fi';
import { BiHome } from 'react-icons/bi';
import { AiOutlineSafety } from 'react-icons/ai';
import { CgHomeAlt } from 'react-icons/cg';

const PhotoNavBar = () => {
    return (
        <div id='notion-photo-navbar' className='sticky top-0 z-50'>
            <div className='bg-white dark:bg-gray-500'>
                <div className='flex justify-center py-3'>
                    <nav className='flex'>
                        <div id='notion-photo-navbar-start' className='flex items-start mr-20 md:mr-80'>
                            <div className='mx-3'>
                                <Link href='/'>
                                    <a>
                                        <BiHome className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div id='notion-photo-navbar-end' className='flex items-end'>
                            <div className='mx-3'>
                                <Link href='https://www.harrly.com'>
                                    <a>
                                        <CgHomeAlt className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                            <div className='mx-3'>
                                <Link href='https://github.com/Harry-Yep'>
                                    <a>
                                        <FiGithub className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                            <div className='mx-3'>
                                <Link href='https://www.harrly.com/privacy-policy'>
                                    <a>
                                        <AiOutlineSafety className='h-6 w-6' />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PhotoNavBar;
