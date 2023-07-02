<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Product::get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Product::create([
           'itemCode'=>$request->itemCode,
           'productName'=>$request->productName,
            'categoryId' =>$request->categoryId,
           'stock'=>$request->stock,
           'price'=>$request->price,
        ]);
        return response()->json('Successfully Added!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $category = Product::where('id','=',$product)->first();
        $category->update([
            'itemCode'=>$request->itemCode,
            'productName'=>$request->productName,
            'categoryId' =>$request->categoryId,
            'stock'=>$request->stock,
            'price'=>$request->price,
        ]);
        return response()->json('Success!');
    }

    public function updateStockAndPrice()
    {
        $data = Product::all();
        $stock = -1;
        $price = -2;

        foreach ($data as $item) {
            if ($item['categoryId']==4){
                if ($item['stock']<=8){
                    if ($item['stock']==0){
                        Product::updateOrCreate(
                            ['id' => $item['id']],
                            [
                                'stock' => $item['stock'],
                                'price' => 0,
                            ]
                        );
                    }else{
                        $gadgetsPrice = $item['price']+15/100;
                        Product::updateOrCreate(
                            ['id' => $item['id']],
                            [
                                'stock' => $item['stock'],
                                'price' => $gadgetsPrice,
                            ]
                        );
                    }
                }
            }else{
                Product::updateOrCreate(
                    ['id' => $item['id']],
                    [
                        'stock' => $item['stock']-$stock,
                        'price' => $item['price']-$price,
                    ]
                );
            }
        }

        return response()->json(['message' => 'Stock and Price updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
