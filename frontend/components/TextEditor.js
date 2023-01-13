import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

export default function TextEditor () {
  const [value, onChange] = useState(initialValue);
  return <RichTextEditor value={value} onChange={onChange} id="rte" />;
}