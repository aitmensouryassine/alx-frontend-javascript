import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signupPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  const [signupRes, uploadRes] = await Promise.allSettled([signupPromise, uploadPromise]);

  return Promise.resolve([
    {
      status: signupRes.status,
      value: signupRes.status === 'fulfilled' ? signupRes.value : signupRes.reason,
    },
    {
      status: uploadRes.status,
      value: uploadRes.status === 'fulfilled' ? uploadRes.value : `Error: ${uploadRes.reason.message}`,
    },
  ]);
}
