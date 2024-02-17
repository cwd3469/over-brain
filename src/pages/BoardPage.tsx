import useCurrentTarget from '@/stores/useCurrentTarget';
import OLayout from '@/pages/layout/MainLayout';
import TargetCard from '@components/main/TargetCard';

const BoardPage = () => {
  const { target, createTarget, deleteTarget } = useCurrentTarget();

  return (
    <OLayout>
      {target.map((item, index) => {
        return <TargetCard key={index} {...item} onDelete={deleteTarget} />;
      })}
    </OLayout>
  );
};

export default BoardPage;
