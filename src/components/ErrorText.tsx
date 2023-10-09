interface ErrorTextProps {
  errorMessage: string;
}

export const ErrorText = ({ errorMessage }: ErrorTextProps) => {
  return (
    <div>{errorMessage && <div className="text-sm text-red-500 pt-2">{errorMessage}</div>}</div>
  );
};
