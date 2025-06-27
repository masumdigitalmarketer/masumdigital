
// ✅ Customized by ChatGPT for Masum Digital BD
document.addEventListener("DOMContentLoaded", function () {
  function convertCurrencyText() {
    document.body.innerHTML = document.body.innerHTML
      .replace(/Rp\.?\s?/g, "৳ ")
      .replace(/\bIDR\b/g, "BDT")
      .replace(/Cart Belanja/gi, "Shopping Cart")
      .replace(/Keranjang Belanja/gi, "Shopping Cart")
      .replace(/Jumlah/gi, "Quantity")
      .replace(/Pembayaran/gi, "Checkout")
      .replace(/Produk Terbaru/gi, "New Products")
      .replace(/Metode Pembayaran/gi, "Payment Method")
      .replace(/Ongkos Kirim/gi, "Shipping Cost")
      .replace(/Nama Lengkap/gi, "Full Name")
      .replace(/Nomor Telepon/gi, "Phone Number")
      .replace(/Alamat Pengiriman/gi, "Shipping Address")
      .replace(/Kota atau Kecamatan/gi, "City or District")
      .replace(/Kode Pos/gi, "Postal Code");
  }

  convertCurrencyText();
  setInterval(convertCurrencyText, 1000);
});
