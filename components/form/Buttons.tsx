'use client';

import { RxReload } from 'react-icons/rx';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucidePenSquare } from 'lucide-react';
import { LuTrash2 } from 'react-icons/lu';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { SignInButton } from '@clerk/nextjs';
// import { SignInButton } from '@clerk/nextjs';
// import { FaRegHeart, FaHeart } from 'react-icons/fa';
// import { LuTrash2, LuSquare } from 'react-icons/lu';

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({ className = '', text = 'submit', size = 'lg' }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' disabled={pending} className={cn('capitalize', className)} size={size}>
      {pending ? (
        <>
          <RxReload className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

type actionType = 'edit' | 'delete';
export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case 'edit':
        return <LucidePenSquare />;
      case 'delete':
        return <LuTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button type='submit' size='icon' variant='link' className='p-2 cursor-pointer'>
      {pending ? <RxReload className=' animate-spin' /> : renderIcon()}
    </Button>
  );
};

export const CardSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button type='button' size='icon' variant='outline' className='p-2 cursor-pointer' asChild>
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' size='icon' variant='outline' className=' p-2 cursor-pointer'>
      {pending ? <RxReload className=' animate-spin' /> : isFavorite ? <FaHeart /> : <FaRegHeart />}
    </Button>
  );
};
