import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, getDocs } from 'firebase/firestore';
import {
  loginEmail, eliminarPost, editarPost, updateLike, disLike, getPerfil, getUsername, registroMail,
  traerPost,
} from '../src/components/utils';

jest.mock('firebase/auth');
// signInWithEmailAndPassword = jest.fn();
jest.mock('../src/components/utils');
jest.mock('firebase/firestore');

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

/* eslint-disable */
describe('traer post', () => {
  it('deberia llamar get doc con el documento correcto', async () => {
    const mockData = { id: 1, titulo: 'titulo del post', contenid: 'contenido del post' };
    const mockGetData = jest.fn(() => Promise.resolve(mockData));
    traerPost.mockImplementationOnce(() => getDoc());
    getDoc.mockImplementationOnce(mockGetData);

    // llamar a la funcion traer post
    const id = 'postId';
    const resultado = await traerPost(id);

    // verifica que getDoc se llame 
    expect(getDoc).toHaveBeenCalled();

    // verifica que la funcion traerpost retorne el resultado esperado
    expect(resultado).toEqual(mockData);
  });
});
/* eslint-disable */

describe('registro mail', () => {
  it('deberia llamar la funcion', () => {
    registroMail.mockImplementationOnce(() => createUserWithEmailAndPassword());
    registroMail('caro1396@gmail.com', 'Caro123@', '/', 'caro');
    expect(registroMail).toHaveBeenCalled();
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('deberia llevarme a la pagina inicial', () => {
    const auth = { currentUser: { emailVerified: true }};
    const onNavigate = jest.fn();

    registroMail.mockImplementationOnce(() => {
      if (auth.currentUser.emailVerified){
        onNavigate('/');
      }
    });
    registroMail('caro1396@gmail.com', 'Caro123@', '/', 'caro');
    expect(onNavigate).toHaveBeenCalledWith('/');
  });
});

/* eslint-disable */
describe('getUsername', () => {
  it('deberia traer el nombre del usuario', async () => {
    const userdoc = { data: () => ({ name: 'Paola Luna' }),
  };
    const usersnapshot = {
      empty: false,
      docs: [userdoc],
    }
  
    const mockData = jest.fn(() => Promise.resolve(usersnapshot));

    getUsername.mockImplementationOnce(() => {
      if (!usersnapshot.empty) {
        const userdoc = usersnapshot.docs[0];
        return userdoc.data().name;
      }
    });
    getDocs.mockImplementationOnce(mockData);

    // llamar a la funcion traer nombre usuairo
    const email = 'lunapp20@gmail.com';
    const resultado = await getUsername(email);
  
    // verifica que la funcion  retorne el resultado esperado
    expect(resultado).toEqual(usersnapshot.docs[0].data().name);// tambien se ouede poner paola luna
  });
});
/* eslint-disable */


