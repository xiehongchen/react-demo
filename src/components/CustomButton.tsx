import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface CustomButtonProps extends ButtonProps {
  size?: 'small' | 'middle' | 'large';
  shape?: 'round' | 'circle' | 'default';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  size = 'default',
  shape = 'default',
  ...rest
}) => {
  let className = '';
  if (size !== 'default') {
    className += ` ${size}`;
  }
  if (shape !== 'default') {
    className += ` ${shape}`;
  }

  return <Button className={className.trim()} {...rest} />;
};

export default CustomButton;
