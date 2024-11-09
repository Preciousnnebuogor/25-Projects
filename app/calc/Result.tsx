import React from 'react'

type IProps = {
  resultValue: string;
};
export default function Result(props: IProps) {
  return (
    <div className='mb-2 p-2 shadow-md'>
        {props.resultValue}
    </div>
  )
}
