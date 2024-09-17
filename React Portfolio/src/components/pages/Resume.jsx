export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p className='pdf-wrapper'>
      <embed src="src/assets/resume.pdf#view=FitH" type="application/pdf"></embed>
      </p>
    </div>
  );
}
