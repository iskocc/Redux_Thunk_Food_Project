
# Thunk Sepeti Web Uygulaması

Bu proje, **Vite** kullanılarak geliştirilmiş çok sayfalı bir yemek siparişi web uygulamasıdır. Projede **json-server** kullanılarak bir veri tabanı oluşturulmuş ve **Axios**, **Redux**, **Redux Thunk** kullanılarak API istekleri yönetilmiştir. **React Router DOM** ile sayfa navigasyonu sağlanmış ve tasarım ile stillendirme **Tailwind CSS** ve **React Icons** kullanılarak yapılmıştır.

## İçindekiler
- [Özellikler](#özellikler)
- [Ekran Görüntüleri](#ekran-görüntüleri)
- [Kurulum](#kurulum)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Proje Yapısı](#proje-yapısı)
- [API Kullanımı](#api-kullanımı)
- [Geliştirme](#geliştirme)
- [Katkıda Bulunma](#katkıda-bulunma)

## Özellikler
- Restoran ve ürün listesi görüntüleme
- Sipariş sepeti oluşturma
- Ürün ekleme ve kaldırma
- Sipariş özeti ve toplam tutar hesaplama
- Kullanıcı kayıt ve giriş işlemleri
- Mobil uyumlu ve responsive tasarım
- Çoklu sayfa navigasyonu
- Tailwind CSS ile özelleştirilebilir şık tasarım

## Ekran Görüntüleri

![Ana Sayfa](desktop.gif)


## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. **Projeyi klonlayın**:
   ```bash
   git clone https://github.com/cengo14/react-redux-thunk-food-cart-project
   ```

2. **Gerekli bağımlılıkları yükleyin**:
   ```bash
   npm install
   ```

3. **json-server'ı başlatın**:
   ```bash
   npm run server
   ```

4. **Uygulamayı çalıştırın**:
   ```bash
   npm run dev
   ```

5. **Tarayıcınızda açın**:
   `http://localhost:5173`

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü oluşturmak için
- **Vite**: Hızlı geliştirme ve derleme aracı
- **Redux**: Global state yönetimi için
- **Redux Thunk**: Asenkron işlemler için
- **Axios**: API istekleri yapmak için
- **json-server**: Sahte veri tabanı sağlamak için
- **Tailwind CSS**: Responsive ve modern tasarım için
- **React Icons**: İkonlar için
- **React Router DOM**: Çoklu sayfa navigasyonu için

## Proje Yapısı

```bash
├── public
│   ├── logo.png
├── src
│   ├── components
│   ├── pages
│   ├── redux
│   ├── utils
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── ...
├── db.json
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

- **utils/**: API isteklerinin yapıldığı dosyalar
- **components/**: Tekrar kullanılabilir bileşenler
- **pages/**: Sayfa bileşenleri
- **redux/**: Redux store ve reducer'ler
- **db.json**: json-server için sahte veri tabanı
- **vite.config.js**: Vite yapılandırma dosyası

## API Kullanımı

- **Restoranlar**:
  - GET `/restaurants`: Tüm restoranları getirir
  - GET `/restaurants/:id`: Belirtilen ID'ye sahip restoranı getirir
- **Ürünler**:
  - GET `/products`: Tüm ürünleri getirir
  - GET `/products/:id`: Belirtilen ID'ye sahip ürünü getirir

## Geliştirme

Projeyi geliştirmek isterseniz, aşağıdaki adımları takip edebilirsiniz:

1. **Fork** yapın (üst sağda)
2. Yeni bir dal oluşturun (`git checkout -b feature/ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik ekle'`)
4. Dalınızı push edin (`git push origin feature/ozellik`)
5. Bir Pull Request oluşturun

## Katkıda Bulunma

Katkılarınızı bekliyoruz! Proje üzerinde geliştirmeler yapmak isterseniz, lütfen önce bir konu açarak iletişime geçin.
# Redux_Thunk_Food_Project
