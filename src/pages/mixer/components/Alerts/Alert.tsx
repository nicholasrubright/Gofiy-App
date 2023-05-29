import { AlertEnum } from "@mytypes/index";

const ErrorAlert = (message: string) => {
  return (
    <div className="alert alert-red d-flex align-items-center" role="alert">
      <i className="bi bi-exclamation-triangle-fill px-2"></i>
      <div>{message}</div>
    </div>
  );
};

const InfoAlert = (message: string) => {
  return (
    <div className="alert alert-yellow d-flex align-items-center" role="alert">
      <i className="bi bi-info-circle-fill px-2"></i>
      <div>{message}</div>
    </div>
  );
};

export default function Alert(props: AlertProps) {
  const { type, message } = props;

  let alertComponent = null;

  switch (type) {
    case AlertEnum.ERROR:
      alertComponent = ErrorAlert(message);
      break;
    case AlertEnum.INFO:
      alertComponent = InfoAlert(message);
      break;
    default:
      break;
  }

  return <div className="container-fluid row pt-3">{alertComponent}</div>;
}

interface AlertProps {
  type: AlertEnum;
  message: string;
}
