import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  loginEmail, eliminarPost, editarPost, updateLike, disLike, getPerfil, getUsername, registroMail,
} from '../src/components/utils';

jest.mock('firebase/auth');
// signInWithEmailAndPassword = jest.fn();
jest.mock('../src/components/utils');

describe('signInWithEmailAndPassword', () => {
  it('Es una función', () => {
    expect(typeof loginEmail).toBe('function');
  });
  it('Debería llamarla', () => {
    console.log(loginEmail);
    loginEmail.mockImplementationOnce(() => signInWithEmailAndPassword());
    loginEmail('lunapp20@gmail.com', 'Paola1234@', 'Home');
    expect(loginEmail).toHaveBeenCalled();
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Debería llevarme al /Home si el email está verficiado.', () => {
    const auth = { currentUser: { emailVerified: true } };
    console.log(auth);
    const onNavigate = jest.fn();

    loginEmail.mockImplementationOnce(() => {
      if (auth.currentUser.emailVerified) {
        onNavigate('/Home');
      }
    });
    loginEmail('lunapp20@gmail.com', 'Paola1234@', 'Home');
    expect(onNavigate).toHaveBeenCalledWith('/Home');
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

describe('updateLike', () => {
  it('Debería llamarla', async () => {
    await updateLike('1234', '1234');
    expect(updateLike).toHaveBeenCalled();
  });
});

describe('disLike', () => {
  it('Debería llamarla', async () => {
    await disLike('1234', '1234');
    expect(disLike).toHaveBeenCalled();
  });
});

describe('getPerfil', () => {
  it('Debería llamarla', async () => {
    await getPerfil('lunapp20@gmail.com');
    expect(getPerfil).toHaveBeenCalled();
  });
});

describe('getUsername', () => {
  it('Debería llamarla', async () => {
    await getUsername('lunapp20@gmail.com');
    expect(getUsername).toHaveBeenCalled();
  });
});

describe('registroMail', () => {
  it('Debería llamarla', async () => {
    await registroMail('lunapp20@gmail.com', 'Paola1234@', 'Home', 'Paola');
    expect(registroMail).toHaveBeenCalled();
  });
});
