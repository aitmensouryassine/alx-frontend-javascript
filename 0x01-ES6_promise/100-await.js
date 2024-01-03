import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo = null;
  let user = null;

  try {
    photo = await uploadPhoto();
    user = await createUser();

    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
