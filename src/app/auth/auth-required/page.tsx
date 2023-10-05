'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

const AuthRequired = () => {
  const router = useRouter();

  return (
    <div>
      <div>Please Sign in to view this page. </div>
      <Button variant="ghost" onClick={() => router.push('/auth/login')}>
        Click Here to sign in
      </Button>
    </div>
  );
};

export default AuthRequired;
