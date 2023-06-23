import { signInWithEmailAndPassword } from 'firebase/auth';
import { loginEmail, eliminarPost, editarPost } from '../src/components/utils';

jest.mock('../src/components/utils');
jest.mock('firebase/auth');

describe('signInWithEmailAndPassword', () => {
  it('Es una función', () => {
    expect(typeof loginEmail).toBe('function');
  });
  it('Debería llamarla', async () => {
    loginEmail('lunapp20@gmail.com', 'Paola1234@', 'Home');
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('deleteDoc', () => {
  it('Debería llamarla', async () => {
    await eliminarPost('1234');
    expect(eliminarPost).toHaveBeenCalled();
  });
});

describe('editarPost', () => {
  it('Debería llamarla', async () => {
    await editarPost('1234');
    expect(editarPost).toHaveBeenCalled();
  });
});
