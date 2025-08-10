import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Loader2 } from 'lucide-react';
import { PageContainer } from '../../common/layout/PageContainer';

export const OIDCLogoutCallback: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
      logout();
      navigate('/', { replace: true });
  }, [logout]);

  return (
    <PageContainer>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 className="w-6 h-6 text-light-text-secondary dark:text-dark-text-secondary animate-spin" />
          <span className="text-light-text dark:text-dark-text text-lg">Completing sign out...</span>
        </div>
      </div>
    </PageContainer>
  );
};
