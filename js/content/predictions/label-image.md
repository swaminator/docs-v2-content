---
title: Idenitfy celebrities in an image
description: 
---

``` swift
func detectCelebs(_ image: URL) {
	_ = Amplify.Predictions.identify(type: .detectCelebrity, image: image, options: PredictionsIdentifyRequest.Options(), listener: { (event) in
		switch event {
		case .completed(let result):
			let data = result as! IdentifyCelebritiesResult
			self.celebName = data.celebrities[0].metadata.name
			print(result)
		case .failed(let error):
			print(error)
		default:
			print("")
		}
	})
}
```

