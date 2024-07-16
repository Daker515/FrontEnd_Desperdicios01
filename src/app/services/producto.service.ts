import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/empresa';
import { Observable } from 'rxjs';

const BASIC_URL = 'https://positive-curiosity-production.up.railway.app';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  createProduct(producto: Producto): Observable<Producto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Producto>(`${BASIC_URL}/api/productos`, producto, {
      headers,
    });
  }

  /* https://positive-curiosity-production.up.railway.app/api/productos/empresa/id */
  findAll(id: number): Observable<Producto[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Producto[]>(
      `${BASIC_URL}/api/productos/empresa/${id}`,
      {
        headers,
      }
    );
  }

  /* https://positive-curiosity-production.up.railway.app/api/productos/id */
  deleteProduct(id: number): Observable<Producto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<Producto>(`${BASIC_URL}/api/productos/${id}`, {
      headers,
    });
  }

  /* https://positive-curiosity-production.up.railway.app/api/productos/id */
  updateProduct(id: number, producto: Producto): Observable<Producto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<Producto>(
      `${BASIC_URL}/api/productos/${id}`,
      producto,
      {
        headers,
      }
    );
  }

  /* https://positive-curiosity-production.up.railway.app/api/productos/id */
  findProductById(id: number): Observable<Producto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Producto>(`${BASIC_URL}/api/productos/${id}`, {
      headers,
    });
  }

  /*https://positive-curiosity-production.up.railway.app/api/productos/empresa/id*/
  getProductosByEmpresa(id: number): Observable<Producto[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Producto[]>(
      `${BASIC_URL}/api/productos/empresa/${id}`,
      {
        headers,
      }
    );
  }
}
