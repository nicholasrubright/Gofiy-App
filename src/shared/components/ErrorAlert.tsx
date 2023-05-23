export default function ErrorAlert(props: ErrorAlertProps) {
  const { message } = props;

  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      <div>{message}</div>
    </div>
  );
}

interface ErrorAlertProps {
  message: string;
}
