from os.path import dirname, join
import yfinance as yf
import re
import json

data = []
current_dir = dirname(__file__)

tickers_file = join(current_dir, "./tickers.csv")
with open(tickers_file, 'r') as f:
    for line in f:
        symbol = re.sub(r"[\n\t\s]*", "", line)
        print('Getting stock data for {}'.format(symbol))
        ticker = yf.Ticker(symbol)
        if 'shortName' in ticker.info.keys():
            data.append({
                'symbol': ticker.info['symbol'] if 'symbol' in ticker.info.keys() else '',
                'shortName': ticker.info['shortName'] if 'shortName' in ticker.info.keys() else '',
                'currentPrice': ticker.info['currentPrice'] if 'currentPrice' in ticker.info.keys() else '',
                'fiftyTwoWeekHigh': ticker.info['fiftyTwoWeekHigh'] if 'fiftyTwoWeekHigh' in ticker.info.keys() else '',
                'fiftyTwoWeekLow': ticker.info['fiftyTwoWeekLow'] if 'fiftyTwoWeekLow' in ticker.info.keys() else '',
                'fiveYearAvgDividendYield': ticker.info['fiveYearAvgDividendYield'] if 'fiveYearAvgDividendYield' in ticker.info.keys() else '',
                'averageDailyVolume10Day': ticker.info['averageDailyVolume10Day'] if 'averageDailyVolume10Day' in ticker.info.keys() else '',
                'ebitdaMargins': ticker.info['ebitdaMargins'] if 'ebitdaMargins' in ticker.info.keys() else '',
                'profitMargins': ticker.info['profitMargins'] if 'profitMargins' in ticker.info.keys() else '',
                'recommendationKey': ticker.info['recommendationKey'] if 'recommendationKey' in ticker.info.keys() else '',
                'debtToEquity': ticker.info['debtToEquity'] if 'debtToEquity' in ticker.info.keys() else '',
                'fiftyTwoWeekChange': ticker.info['52WeekChange'] if '52WeekChange' in ticker.info.keys() else '',
                'dividendYield': ticker.info['dividendYield'] if 'dividendYield' in ticker.info.keys() else '',
                'quickRatio': ticker.info['quickRatio'] if 'quickRatio' in ticker.info.keys() else '',
                'currentRatio': ticker.info['currentRatio'] if 'currentRatio' in ticker.info.keys() else '',
                'revenuePerShare': ticker.info['revenuePerShare'] if 'revenuePerShare' in ticker.info.keys() else '',
                'forwardEps': ticker.info['forwardEps'] if 'forwardEps' in ticker.info.keys() else '',
                'forwardPE': ticker.info['forwardPE'] if 'forwardPE' in ticker.info.keys() else '',
                'marketCap': ticker.info['marketCap'] if 'marketCap' in ticker.info.keys() else ''
            })
        else:
            print('No data found for {}'.format(symbol))
    f.close()

output_file = join(current_dir, "./data.json")
with open(output_file, 'w') as fp:
    json.dump(data, fp, indent=4)