import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { currencies_example, Currency, CurrencyMetadata, currency_metadata_example } from '../../models';
import { CurrenciesService } from '../services/currencies.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  currency!: Currency;
  currencyMetadata!: CurrencyMetadata;
  loaded!: Boolean;
  cryptoAmount!: Number;
  resultUSD!: Number;


  constructor(private currenciesService: CurrenciesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurrencyData();
    this.cryptoAmount = 1;
    this.resultUSD = Number(this.currency.quote.USD.price.toFixed(2));
  }

  getCurrencyData() {
    // this.loaded = false;
    // this.route.paramMap.subscribe((params) => {
    //   const id = params.get('id');
    //   if (id !== null) {
    //     this.getCurrencyMetadata(+id);
    //     this.getCurrency(+id);
    //     this.loaded = true;
    //   }
    // })

    this.route.paramMap.subscribe((params) => {
      this.loaded = false;
        const id = params.get('id');
        if (id !== null) {
          this.currency = currencies_example.filter((c) => c.id = +id)[0];
          this.currencyMetadata = currency_metadata_example;
          this.loaded = true;
        }
    })
  }


  getCurrencyMetadata(id: Number) {
    this.currenciesService.getCurrencyMetadata(id).subscribe((currencyMetadata) => {
      this.currencyMetadata = currencyMetadata;
    })
  }


  getCurrency(id: Number) {
    this.currenciesService.getCurrency(id).subscribe((currency) => {
      this.currency = currency;
    })
  }

  Convert() {
    this.resultUSD = Number(((Number(this.cryptoAmount)
      * Number(this.currency.quote.USD.price)).toFixed(2)));
  }

}
