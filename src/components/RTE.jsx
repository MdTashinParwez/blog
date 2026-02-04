import { Editor } from '@tinymce/tinymce-react'
import React from 'react'
import { Controller } from 'react-hook-form'


export default function RTE({name,control,defaultValue=""}) {
  return (
    <div className='w-full'>
        {label && <label className='block mb-2 text-sm font-medium text-gray-900 '>{label}</label>}
      
      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({field: {onChange}}) => (
          <Editor
          initialValue={defaultValue}
            init={{
            initialvalue: defaultValue,
              branding: false,
              height: 500,
              menubar: true,
              plugins:[
                  'advlist autolikks lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
              'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help' 
              ,
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onEditorChange={onChange}
          />
        )}
      />

    </div>
  )
}

