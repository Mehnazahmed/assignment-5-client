import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  defaultValue?: string;
};

const CustomInput = ({
  type,
  name,
  label,
  disabled,
  defaultValue,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Form.Item style={{ color: "#fff" }}>
            {" "}
            <span
              style={{
                color: "#fff",
              }}
            >
              {label}
            </span>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              style={{
                borderColor: "#F95924",
              }}
              disabled={disabled}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomInput;
