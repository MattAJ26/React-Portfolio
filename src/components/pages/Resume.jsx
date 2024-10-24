import resume from '../../assets/Resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p className='pdf-wrapper'>
      <embed src={resume} width="device-width" type="application/pdf"></embed>
      </p>
    </div>
  );
}
