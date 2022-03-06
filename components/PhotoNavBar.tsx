import { Fragment } from 'react';

import Link from 'next/link';

import { Menu, Transition, Disclosure } from '@headlessui/react';

import { FiGithub } from 'react-icons/fi';
import { BiHome } from 'react-icons/bi';
import { AiOutlineSafety } from 'react-icons/ai';
import { CgHomeAlt } from 'react-icons/cg';
import { BsTranslate } from 'react-icons/bs';

import siteConfig from '../config/site.config';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

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
                            <Menu as='div' className='mx-3 ml-3 relative'>
                                <div>
                                    <Menu.Button className='flex text-sm rounded-full'>
                                        <span className='sr-only'>Open language menu</span>
                                        <BsTranslate className='h-6 w-6' aria-hidden='true' />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter='transition ease-out duration-100'
                                    enterFrom='transform opacity-0 scale-95'
                                    enterTo='transform opacity-100 scale-100'
                                    leave='transition ease-in duration-75'
                                    leaveFrom='transform opacity-100 scale-100'
                                    leaveTo='transform opacity-0 scale-95'
                                >
                                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                        {siteConfig.global.site.language.map((item, index) => {
                                            return (
                                                <Menu.Item key={index}>
                                                    {({ active }) => (
                                                        <a href={item.code} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            );
                                        })}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PhotoNavBar;
