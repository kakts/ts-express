'use strict'
/**
 * book CRUD apis
 */
import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers"
import "reflect-metadata"

import * as mongoose from 'mongoose'

const BookSchema = {
    name: String,　
    author: String,
    price: Number
}

// スキーマ作成
const bookSchema = new mongoose.Schema(BookSchema)
// モデル作成
const bookModel = mongoose.model('Book', bookSchema)

// import {db} from 'mongoose'
// 


@Controller()
export class BookController {
    @Get("/books")
    getAll() {
        console.log("/books")

        const book = new bookModel({
            name: 'test1',
            author: 'john',
            price: 100
        })
        book.save((err, book) => {
            if (err) {
                console.error(err)
                return
            }
            console.log("update!", book)
        })

    }
}

