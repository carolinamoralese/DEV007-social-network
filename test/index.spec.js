import { inicioSesion } from '../src/components/inicioSesion';

createUserWithEmailAndPassword.mock('../src/components/utils', () => ({
  mail: jest.fn(),
  password: jest.fn(),
}));
describe('inicio sesion con correo no registrado', () => {
  let inputEmail;
  let inputPassword;
  let buttonLogin;
  beforeEach(() => {
    document.body.appendChild(inicioSesion());
    inputEmail = document.getElementById('email');
    inputPassword = document.getElementById('password');
    buttonLogin = document.getElementById('botonIngresar');
  });
  it('Debería mostrar error de correo no registrado', async () => {
    inicioSesion.mockImplementationOnce(() => Promise.reject({ code: 'auth/user-not-found' }));
    inputEmail.value = 'caro12@gmail.com';
    inputPassword.value = '123456';
    buttonLogin.click();
    await tick();
    expect(alert('correo no registrado')).toBe('Correo no registrado');
  });
});
