export class Sample {

static FIZZ_BUZZ = `(define (fb x)
	(if
		(and (= (mod x 3) 0) (= (mod x 5) 0))
		"fizzbuzz"
		(if
			(= (mod x 3) 0)
			"fizz"
			(if
				(= (mod x 5) 0)
				"buzz"
				x
			)
		)
	)
)
(fb 3)
`

static FIBONACCI = `(define (fib n) (if (< n 2)
    n
    (+ (fib (- n 2)) (fib (- n 1)))))
(fib 10)
`
}