import { toast } from 'react-toastify';

function MyComponent() {
  const showSuccess = () => {
    toast.success('İşlem başarılı!');
  };

  const showError = () => {
    toast.error('Bir hata oluştu!');
  };

  return (
    <div className="p-4">
      <button onClick={showSuccess} className="btn">Başarılı Toast</button>
      <button onClick={showError} className="btn">Hatalı Toast</button>
    </div>
  );
}
