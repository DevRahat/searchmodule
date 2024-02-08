const products=[
    {id: 1, name: 'xiami',price:10000},
    {id: 1, name: 'Iphone',price:100000},
    {id: 1, name: 'mac book air',price:10000},
    {id: 1, name: 'Dell inspiron',price:10000}
    
];

function matchedProducts(products,search){
    const matched=[];
    for(const product of products){
        if(product.name.tolowerCase().includes(search.tolowerCase())){
            matched.push(product);
        }
    }return matched;
}

const result=matchedProducts(products, 'phone');
console.log(result);