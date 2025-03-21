//dummy data for the catalogconst catalog=[
{id: 1, name: 'product 1', price: 20},
{id: 2, name: 'product 2', price: 30},
{id: 3, name: 'product 3', price: 25},
];
//fuction to load the catalog
function loadcatalog(){
const catalogcontainer= document.getelementbyid('content');
catalogcontainer.innerHTML='<h2>catalog</h2>';
catalog.foreach(product)=>{
const productcard = document.createelement('div');
productcard.classlist.add('product-card');
productcard.innerhtml=
<h3>${product,name}</h3>
<p>$${product.price}</p>
<button onclick="addtocart(${product.id})">add to cart</button>
';
catalogcontainer.appendchild(productcard);
});
}
//function to add a product to the cartfunction addtocart(productid){
//implement cart functionality here
console.log('product ${productid} added to cart');
}
//initial loadloadcatalog();
