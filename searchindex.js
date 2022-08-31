Search.setIndex({"docnames": ["add", "api", "auto_examples/index", "auto_examples/plot_compare_time", "auto_examples/plot_lasso_vs_weighted", "auto_examples/plot_logreg_various_penalties", "auto_examples/plot_pen_prox", "auto_examples/plot_sparse_recovery", "auto_examples/plot_zero_weights_lasso", "auto_examples/sg_execution_times", "generated/skglm.ElasticNet", "generated/skglm.GeneralizedLinearEstimator", "generated/skglm.Lasso", "generated/skglm.LinearSVC", "generated/skglm.MCPRegression", "generated/skglm.MultiTaskLasso", "generated/skglm.SparseLogisticRegression", "generated/skglm.WeightedLasso", "generated/skglm.datafits.Huber", "generated/skglm.datafits.Logistic", "generated/skglm.datafits.Quadratic", "generated/skglm.datafits.QuadraticGroup", "generated/skglm.datafits.QuadraticSVC", "generated/skglm.penalties.IndicatorBox", "generated/skglm.penalties.L0_5", "generated/skglm.penalties.L1", "generated/skglm.penalties.L1_plus_L2", "generated/skglm.penalties.L2_3", "generated/skglm.penalties.MCPenalty", "generated/skglm.penalties.WeightedGroupL2", "generated/skglm.penalties.WeightedL1", "index"], "filenames": ["add.rst", "api.rst", "auto_examples/index.rst", "auto_examples/plot_compare_time.rst", "auto_examples/plot_lasso_vs_weighted.rst", "auto_examples/plot_logreg_various_penalties.rst", "auto_examples/plot_pen_prox.rst", "auto_examples/plot_sparse_recovery.rst", "auto_examples/plot_zero_weights_lasso.rst", "auto_examples/sg_execution_times.rst", "generated/skglm.ElasticNet.rst", "generated/skglm.GeneralizedLinearEstimator.rst", "generated/skglm.Lasso.rst", "generated/skglm.LinearSVC.rst", "generated/skglm.MCPRegression.rst", "generated/skglm.MultiTaskLasso.rst", "generated/skglm.SparseLogisticRegression.rst", "generated/skglm.WeightedLasso.rst", "generated/skglm.datafits.Huber.rst", "generated/skglm.datafits.Logistic.rst", "generated/skglm.datafits.Quadratic.rst", "generated/skglm.datafits.QuadraticGroup.rst", "generated/skglm.datafits.QuadraticSVC.rst", "generated/skglm.penalties.IndicatorBox.rst", "generated/skglm.penalties.L0_5.rst", "generated/skglm.penalties.L1.rst", "generated/skglm.penalties.L1_plus_L2.rst", "generated/skglm.penalties.L2_3.rst", "generated/skglm.penalties.MCPenalty.rst", "generated/skglm.penalties.WeightedGroupL2.rst", "generated/skglm.penalties.WeightedL1.rst", "index.rst"], "titles": ["How to add a custom penalty", "API Documentation", "Examples Gallery", "Timing comparison with scikit-learn for Lasso", "Comparison of Lasso and Weighted Lasso", "Logistic regression with Elastic net and minimax concave penalties", "Value and proximal operators of penalties", "Sparse recovery with non-convex penalties", "Weighted Lasso with some zero weights", "Computation times", "skglm.ElasticNet", "skglm.GeneralizedLinearEstimator", "skglm.Lasso", "skglm.LinearSVC", "skglm.MCPRegression", "skglm.MultiTaskLasso", "skglm.SparseLogisticRegression", "skglm.WeightedLasso", "skglm.datafits.Huber", "skglm.datafits.Logistic", "skglm.datafits.Quadratic", "skglm.datafits.QuadraticGroup", "skglm.datafits.QuadraticSVC", "skglm.penalties.IndicatorBox", "skglm.penalties.L0_5", "skglm.penalties.L1", "skglm.penalties.L1_plus_L2", "skglm.penalties.L2_3", "skglm.penalties.MCPenalty", "skglm.penalties.WeightedGroupL2", "skglm.penalties.WeightedL1", "skglm"], "terms": {"With": [0, 28], "skglm": [0, 3, 4, 5, 6, 7, 8], "you": [0, 31], "can": [0, 10, 11, 12, 13, 14, 16, 17, 31], "solv": [0, 3, 10, 11, 12, 13, 14, 15, 16, 17, 31], "ani": [0, 31], "gener": [0, 2, 3, 4, 5, 6, 7, 8, 11, 31], "linear": [0, 11, 14, 31], "model": [0, 3, 31], "arbitrari": [0, 31], "smooth": [0, 13], "proxim": [0, 2, 9], "defin": [0, 7], "two": [0, 21, 29], "class": [0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], "thei": 0, "pass": 0, "generalizedlinearestim": [0, 5], "us": [0, 4, 5, 8, 10, 11, 12, 13, 14, 16, 17, 20, 21, 22, 31], "is_classif": [0, 5, 11], "specifi": [0, 10, 11, 12, 13, 14, 15, 16, 17], "task": [0, 11, 22], "i": [0, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 23, 31], "classif": [0, 11, 22], "regress": [0, 2, 9, 11, 14, 16], "clf": [0, 8], "mydatafit": 0, "mypenalti": 0, "true": [0, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17], "A": [0, 16, 22, 31], "jitclass": 0, "which": [0, 7], "must": [0, 13, 16], "inherit": 0, "from": [0, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 17], "basepenalti": [0, 11], "base": [0, 12, 17], "subclass": 0, "abstractmethod": 0, "def": [0, 3], "get_spec": 0, "self": 0, "numba": [0, 31], "type": 0, "attribut": [0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 29], "return": [0, 3], "spec": 0, "tupl": 0, "attribute_nam": 0, "dtype": 0, "compil": [0, 3, 11, 31], "params_to_dict": 0, "get": 0, "paramet": [0, 10, 11, 12, 13, 14, 15, 16, 17, 29], "initi": [0, 10, 11, 12, 13, 14, 15, 16, 17], "an": [0, 10, 11, 12, 13, 14, 15, 16, 17], "instanc": [0, 11], "dict_of_param": 0, "dict": 0, "The": [0, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 29], "instanti": 0, "object": [0, 3, 10, 12, 13, 14, 15, 16, 17], "valu": [0, 2, 7, 9, 28], "w": [0, 3, 7, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21, 22], "vector": [0, 10, 12, 13, 14, 15, 17], "prox_1d": [0, 6], "stepsiz": 0, "j": [0, 7, 28], "oper": [0, 2, 9], "featur": [0, 4, 8, 14, 16, 17, 31], "subdiff_dist": 0, "grad": 0, "distanc": 0, "neg": 0, "gradient": [0, 18, 19, 20, 22], "subdifferenti": 0, "arrai": [0, 6, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 29], "shape": [0, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 29], "n_featur": [0, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 28, 29], "coeffici": [0, 5, 16], "0": [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 23, 24, 28], "restrict": 0, "ws_size": 0, "indic": [0, 21, 23, 29], "work": [0, 10, 11, 12, 13, 14, 15, 16, 17, 31], "set": [0, 5, 10, 11, 12, 13, 14, 15, 16, 17, 23], "is_pen": 0, "binari": [0, 3, 16], "mask": 0, "penal": [0, 4, 8, 14], "generalized_support": 0, "r": [0, 7, 8], "support": [0, 13, 16, 17, 31], "To": [0, 13, 31], "implement": [0, 31], "your": 0, "own": 0, "onli": [0, 16], "need": 0, "new": 0, "its": 0, "kkt": 0, "violat": 0, "ar": [0, 17, 31], "comput": [0, 7, 8, 20], "For": [0, 10, 14], "exampl": [0, 3, 4, 5, 6, 7, 8], "l1": [0, 6, 7, 10, 11, 12, 17, 26, 30, 31], "__init__": [0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], "alpha": [0, 3, 4, 5, 6, 7, 8, 10, 12, 14, 15, 16, 17, 23, 24, 25, 26, 27, 28, 29, 30], "float64": 0, "np": [0, 3, 4, 5, 6, 7, 8, 14], "sum": [0, 3], "ab": [0, 3, 4, 8, 28], "soft": [0, 14], "threshold": [0, 14], "st": 0, "zeros_lik": [0, 7], "idx": [0, 7], "enumer": [0, 7], "grad_j": 0, "max": [0, 3, 4, 7, 8, 13], "els": 0, "sign": [0, 5], "ones": 0, "bool_": 0, "non": [0, 2, 9, 13, 24, 27, 28, 31], "zero": [0, 2, 4, 7, 9], "alpha_max": [0, 4, 7, 8], "gradient0": 0, "solut": [0, 7, 10, 11, 12, 13, 14, 15, 16, 17], "basedatafit": [0, 11], "x": [0, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 28], "y": [0, 3, 4, 5, 7, 8, 10, 12, 13, 14, 15, 16, 17, 20, 21, 22], "pre": [0, 20], "befor": 0, "fit": [0, 3, 4, 5, 8, 10, 11, 12, 13, 14, 15, 16, 17], "n_sampl": [0, 4, 5, 7, 8, 10, 12, 13, 14, 15, 17, 18, 19, 20, 21, 23], "design": 0, "matrix": [0, 10, 11, 12, 13, 14, 15, 17], "target": [0, 11], "initialize_spars": 0, "x_data": 0, "x_indptr": 0, "x_indic": 0, "when": [0, 4, 10, 11, 12, 13, 14, 15, 16, 17], "spars": [0, 2, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 28, 31], "n_element": 0, "data": [0, 5, 7], "csc": 0, "1": [0, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 28, 29], "indptr": 0, "xw": 0, "array_lik": 0, "float": [0, 10, 11, 12, 13, 14, 15, 16, 17, 29], "gradient_scalar": 0, "respect": 0, "th": 0, "coordin": [0, 11, 14, 31], "int": [0, 3, 7, 10, 11, 12, 13, 14, 15, 16, 17], "evalu": [0, 20], "gradient_scalar_spars": 0, "dimens": 0, "along": 0, "method": [0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], "declar": 0, "see": [0, 14], "quadrat": [0, 7, 11, 21, 22], "read": [0, 18, 19, 20, 21, 22, 29], "2": [0, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 27, 28], "2_2": [0, 10, 12, 13, 14, 15, 17, 20, 21, 22], "xty": [0, 20], "quantiti": [0, 20], "dure": [0, 20], "equal": [0, 14, 17, 19, 20], "t": [0, 3, 4, 7, 8, 13, 16, 20, 22], "lipschitz": [0, 18, 19, 20, 21, 22], "coordinatewis": [0, 18, 19, 20, 22], "constant": [0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "norm": [0, 3, 4, 5, 7, 12, 15, 17, 19, 20, 24, 27, 31], "axi": [0, 4, 5, 7, 19, 20], "note": [0, 17, 23, 28], "jit": [0, 11], "time": [0, 2, 4, 5, 6, 7, 8, 31], "thi": [0, 8, 11, 13, 31], "allow": [0, 8], "faster": 0, "rang": [0, 3, 7], "len": [0, 3, 4, 5, 7, 8, 15, 16], "nrm2": 0, "xjtxw": 0, "full_grad_spars": 0, "intercept_update_step": 0, "mean": [0, 16], "penalti": [2, 3, 8, 9, 10, 11, 12, 13, 14, 15, 17, 21, 31], "comparison": [2, 9], "lasso": [2, 7, 9, 10, 14, 17, 31], "weight": [2, 6, 9, 12, 17, 29, 30, 31], "some": [2, 4, 6, 9], "logist": [2, 9, 16], "elast": [2, 9, 10], "net": [2, 9, 10], "minimax": [2, 9, 28], "concav": [2, 9, 28], "scikit": [2, 9, 31], "learn": [2, 9, 31], "recoveri": [2, 9], "convex": [2, 9, 23, 24, 27, 28, 31], "download": [2, 3, 4, 5, 6, 7, 8], "all": [2, 7, 8, 31], "python": [2, 3, 4, 5, 6, 7, 8, 31], "sourc": [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], "code": [2, 3, 4, 5, 6, 7, 8, 31], "auto_examples_python": 2, "zip": [2, 3], "jupyt": [2, 3, 4, 5, 6, 7, 8], "notebook": [2, 3, 4, 5, 6, 7, 8], "auto_examples_jupyt": 2, "sphinx": [2, 3, 4, 5, 6, 7, 8], "click": [3, 4, 5, 6, 7, 8], "here": [3, 4, 5, 6, 7, 8], "full": [3, 4, 5, 6, 7, 8], "compar": 3, "larg": [3, 8], "scale": 3, "problem": [3, 11, 13, 16, 31], "file_s": 3, "00": [3, 9], "26": 3, "8m": 3, "b": 3, "": [3, 5, 7], "24": 3, "6k": 3, "03": [3, 9], "38": 3, "123kb": 3, "49": 3, "2k": 3, "122kb": 3, "106k": 3, "02": [3, 7], "15": 3, "197kb": 3, "221k": 3, "01": [3, 9], "17": 3, "344kb": 3, "4": [3, 4, 6, 7, 19], "451k": 3, "41": 3, "630kb": 3, "3": [3, 4, 5, 6, 7, 8, 14, 27], "9": 3, "909k": 3, "21": [3, 15], "19mb": 3, "7": [3, 4, 6, 7], "83m": 3, "10": [3, 4, 8, 10, 11, 12, 13, 14, 15, 16, 17], "28mb": 3, "14": [3, 7, 9], "5": [3, 4, 7, 8, 10, 24], "66m": 3, "05": [3, 9], "42mb": 3, "20": 3, "23m": 3, "47mb": 3, "25": 3, "6": [3, 7], "81m": 3, "31": 3, "8": [3, 6], "38m": 3, "69mb": 3, "37": 3, "95m": 3, "02mb": 3, "43": [3, 9], "11": 3, "5m": 3, "26mb": 3, "13": 3, "1m": 3, "55": 3, "7m": 3, "53mb": 3, "61": 3, "16": 3, "2m": 3, "62mb": 3, "67": 3, "67mb": 3, "70": 3, "18": 3, "9m": 3, "97mb": 3, "75": 3, "87mb": 3, "82": 3, "22": 3, "0m": 3, "04": 3, "50mb": 3, "90": 3, "27mb": 3, "96": 3, "14mb": 3, "100": [3, 5, 8, 10, 11, 12, 13, 14, 15, 17], "32mb": 3, "76mb": 3, "import": [3, 4, 5, 6, 7, 8, 31], "warn": 3, "numpi": [3, 4, 5, 6, 7, 8], "linalg": [3, 4, 5, 7], "matplotlib": [3, 4, 5, 6, 7, 8], "pyplot": [3, 4, 5, 6, 7, 8], "plt": [3, 4, 5, 6, 7, 8], "libsvmdata": 3, "fetch_libsvm": 3, "sklearn": [3, 5, 7, 31], "except": 3, "convergencewarn": 3, "linear_model": 3, "lasso_sklearn": 3, "elasticnet": [3, 26], "enet_sklearn": 3, "filterwarn": 3, "ignor": 3, "categori": 3, "compute_obj": 3, "l1_ratio": [3, 5, 6, 10, 26], "loss": [3, 13], "news20": 3, "dict_sklearn": 3, "fit_intercept": [3, 4, 8, 10, 11, 12, 13, 14, 15, 16, 17], "fals": [3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17], "tol": [3, 10, 11, 12, 13, 14, 15, 16, 17], "1e": [3, 7], "12": [3, 5, 7, 9], "enet": 3, "dict_our": 3, "fig": [3, 4, 6, 7, 8], "axarr": [3, 4, 6, 7, 8], "subplot": [3, 4, 6, 7, 8], "constrained_layout": [3, 6, 7, 8], "ax": 3, "pobj_dict": 3, "list": [3, 16], "u": 3, "time_dict": 3, "remov": 3, "max_it": [3, 10, 11, 12, 13, 14, 15, 16, 17], "10_000": 3, "w_star": [3, 5], "coef_": [3, 4, 5, 8, 10, 11, 12, 13, 14, 15, 16, 17], "pobj_star": 3, "n_iter_sklearn": 3, "uniqu": 3, "geomspac": [3, 7], "50": [3, 4, 5, 8, 16], "num": [3, 6, 7], "astyp": 3, "t_start": 3, "w_sklearn": 3, "append": 3, "n_iter_u": 3, "semilogi": 3, "label": [3, 5, 6, 7, 16, 19], "set_ylim": [3, 7], "set_titl": [3, 4, 6, 8], "legend": [3, 5, 6, 7], "set_ylabel": [3, 7], "suboptim": 3, "set_xlabel": [3, 7, 8], "show": [3, 4, 5, 6, 7, 8], "block": [3, 4, 6, 7, 8], "total": [3, 4, 5, 6, 7, 8, 9], "run": [3, 4, 5, 6, 7, 8, 11, 15, 16], "script": [3, 4, 5, 6, 7, 8], "minut": [3, 4, 5, 6, 7, 8], "157": [3, 9], "second": [3, 4, 5, 6, 7, 8, 31], "plot_compare_tim": [3, 9], "py": [3, 4, 5, 6, 7, 8, 9], "ipynb": [3, 4, 5, 6, 7, 8], "galleri": [3, 4, 5, 6, 7, 8], "illustr": [4, 5, 6, 7], "normal": 4, "author": [4, 5, 6, 7, 31], "mathurin": [4, 6, 7], "massia": [4, 6, 7, 31], "quentin": [4, 7], "bertrand": [4, 7, 31], "weightedlasso": [4, 8, 12], "util": [4, 5, 7, 8], "make_correlated_data": [4, 5, 7, 8], "30": [4, 7], "_": [4, 5, 15], "random_st": [4, 5, 7, 8], "w_true": [4, 7, 8], "nnz": 4, "assum": 4, "reason": 4, "have": 4, "smaller": [4, 15, 16], "than": [4, 12, 14, 15, 16, 17], "other": 4, "nois": 4, "random": [4, 7, 8], "randn": 4, "signal": 4, "ratio": 4, "doe": 4, "select": [4, 14], "small": [4, 8], "while": 4, "la": 4, "wei": 4, "sharei": [4, 7, 8], "figsiz": [4, 6, 7, 8], "stem": [4, 5, 8], "coeff": 4, "716": [4, 9], "plot_lasso_vs_weight": [4, 9], "modular": 5, "one": 5, "datafit": [5, 7, 11, 13, 31], "pierr": 5, "antoin": 5, "bannier": [5, 31], "metric": [5, 7], "f1_score": [5, 7], "l1_plus_l2": [5, 6], "mcpenalti": [5, 6, 7], "y_ind": 5, "standard": [5, 7], "mcp": [5, 7, 14, 28], "sqrt": [5, 7], "split": 5, "train": 5, "test": 5, "x_train": 5, "y_train": 5, "x_test": [5, 7], "y_test": [5, 7], "005": 5, "gamma": [5, 6, 7, 14, 28], "clf_enet": 5, "verbos": [5, 10, 11, 12, 13, 14, 15, 16, 17], "y_pred_enet": 5, "predict": 5, "f1_score_enet": 5, "clf_mcp": 5, "y_pred_mcp": 5, "f1_score_mcp": 5, "m": [5, 31], "where": [5, 18, 23], "ravel": 5, "markerfmt": 5, "use_line_collect": 5, "setp": 5, "color": [5, 7], "2ca02c": 5, "ff7f0e": 5, "bx": 5, "loc": [5, 7], "best": 5, "titl": [5, 31], "f1": [5, 7], "3f": 5, "579": [5, 9], "plot_logreg_various_penalti": [5, 9], "gmail": 6, "com": [6, 31], "weightedl1": 6, "scad": [6, 7], "l0_5": [6, 7], "l2_3": [6, 7], "x_rang": 6, "linspac": 6, "300": 6, "pen": [6, 14, 28], "plot": [6, 7], "__class__": 6, "__name__": 6, "758": [6, 9], "plot_pen_prox": [6, 9], "superior": 7, "perform": 7, "l05": 7, "l23": 7, "klopfenstein": [7, 31], "model_select": 7, "train_test_split": 7, "mean_squared_error": 7, "solver": [7, 8, 11, 12, 15, 16, 17, 31], "cd_solver_path": 7, "compiled_clon": 7, "cmap": 7, "get_cmap": 7, "tab10": 7, "simul": 7, "1000": 7, "densiti": 7, "seed": [7, 8], "supp": 7, "choic": [7, 8], "size": [7, 10, 11, 12, 13, 14, 15, 16, 17], "replac": [7, 8, 11, 31], "x_": 7, "y_": 7, "snr": 7, "rho": 7, "test_siz": 7, "lead": 7, "ord": 7, "inf": [7, 14], "n_alpha": 7, "estimation_error": 7, "prediction_error": 7, "l0": 7, "mse_ref": 7, "estim": [7, 10, 11, 12, 13, 14, 15, 16, 17, 31], "kei": 7, "print": 7, "f": [7, 18], "estimator_path": 7, "ws_strategi": [7, 10, 11, 12, 13, 14, 16, 17], "fixpoint": [7, 10, 11, 12, 13, 14, 16, 17], "f1_temp": 7, "prediction_error_temp": 7, "name_estim": 7, "ell_": 7, "close": 7, "sharex": 7, "semilogx": 7, "c": [7, 13, 31], "max_f1": 7, "argmax": 7, "vline": 7, "ymin": 7, "ymax": 7, "linestyl": 7, "line1": 7, "clip_on": 7, "marker": 7, "markers": 7, "min_error": 7, "argmin": 7, "lim": 7, "get_ylim": 7, "min": 7, "line2": 7, "lambda": 7, "lambda_": 7, "mathrm": 7, "score": [7, 10, 11, 12, 13, 14, 16, 17], "pred": 7, "rmse": 7, "left": 7, "out": 7, "bbox_to_anchor": 7, "lower": 7, "mode": 7, "expand": 7, "borderaxespad": 7, "ncol": 7, "105": [7, 9], "plot_sparse_recoveri": [7, 9], "demonstr": 8, "how": 8, "vanish": 8, "fast": 8, "adapt": 8, "primal": [8, 12, 13, 17], "anderson": 8, "acceler": 8, "dual": [8, 13], "handl": [8, 11, 16], "empti": 8, "unpen": [8, 17], "first": [8, 10, 11, 12, 13, 14, 15, 16, 17, 31], "put": 8, "last": 8, "arang": 8, "coef": 8, "neq": 8, "heavili": 8, "few": [8, 31], "lightli": 8, "mani": [8, 31], "index": 8, "492": [8, 9], "plot_zero_weights_lasso": [8, 9], "807": 9, "execut": 9, "auto_exampl": 9, "file": 9, "mb": 9, "07": 9, "max_epoch": [10, 11, 12, 13, 14, 15, 16, 17], "50000": [10, 11, 12, 13, 14, 15, 16, 17], "p0": [10, 11, 12, 13, 14, 15, 16, 17], "0001": [10, 11, 12, 13, 14, 15, 16, 17], "warm_start": [10, 11, 12, 13, 14, 15, 16, 17], "subdiff": [10, 11, 12, 13, 14, 16, 17], "optim": [10, 11, 12, 13, 14, 15, 16, 17], "sum_j": [10, 12, 17], "w_j": [10, 12, 14, 17, 28], "option": [10, 11, 12, 13, 14, 15, 16, 17], "strength": [10, 12, 13, 14, 15, 16, 17], "default": [10, 11, 12, 13, 14, 15, 16, 17, 31], "mix": 10, "l2": [10, 13, 26, 29], "combin": [10, 31], "maximum": [10, 11, 12, 13, 14, 15, 16, 17], "number": [10, 11, 12, 13, 14, 15, 16, 17], "iter": [10, 11, 12, 13, 14, 15, 16, 17], "subproblem": [10, 11, 12, 13, 14, 15, 16, 17], "definit": [10, 11, 12, 13, 14, 15, 16, 17], "cd": [10, 11, 12, 13, 14, 15, 16, 17, 31], "epoch": [10, 11, 12, 13, 14, 15, 16, 17], "each": [10, 11, 12, 13, 14, 15, 16, 17, 21], "stop": [10, 11, 12, 13, 14, 15, 16, 17], "criterion": [10, 11, 12, 13, 14, 15, 16, 17], "bool": [10, 11, 12, 13, 14, 15, 16, 17], "whether": [10, 11, 12, 13, 14, 15, 16, 17], "intercept": [10, 11, 12, 13, 14, 15, 16, 17], "reus": [10, 11, 12, 13, 14, 15, 16, 17], "previou": [10, 11, 12, 13, 14, 15, 16, 17], "call": [10, 11, 12, 13, 14, 15, 16, 17], "otherwis": [10, 11, 12, 13, 14, 15, 16, 17], "just": [10, 11, 12, 13, 14, 15, 16, 17, 31], "eras": [10, 11, 12, 13, 14, 15, 16, 17], "amount": [10, 11, 12, 13, 14, 15, 16, 17], "str": [10, 11, 12, 13, 14, 16, 17], "build": [10, 11, 12, 13, 14, 16, 17], "regular": [10, 12, 13, 14, 15, 16, 17, 29], "cost": [10, 11, 12, 13, 14, 15, 17], "function": [10, 11, 12, 13, 14, 15, 16, 17, 18, 23], "formula": [10, 11, 12, 13, 14, 15, 17], "sparse_coef_": [10, 11, 12, 13, 14, 15, 17], "scipi": [10, 11, 12, 13, 14, 15, 17], "readonli": [10, 11, 12, 13, 14, 17], "properti": [10, 11, 12, 13, 14, 17], "deriv": [10, 11, 12, 13, 14, 17], "intercept_": [10, 11, 12, 13, 14, 15, 16, 17], "term": [10, 11, 12, 13, 14, 15, 16, 17], "decis": [10, 11, 12, 13, 14, 15, 16, 17], "n_iter_": [10, 11, 12, 13, 14, 15, 16, 17], "reach": [10, 11, 12, 13, 14, 15, 16, 17], "toler": [10, 11, 12, 13, 14, 15, 16, 17], "none": [11, 17], "take": 11, "descent": [11, 14, 31], "It": 11, "If": [11, 14, 17, 31], "input": 11, "valid": 11, "n_task": 11, "celer": [12, 15, 17], "extrapol": [12, 17], "mcpregress": [12, 17], "sparser": [12, 17], "hing": 13, "sum_i": [13, 19], "y_i": [13, 16, 18, 19], "beta": 13, "e": [13, 17, 31], "we": 13, "stai": 13, "our": 13, "framework": 13, "svc": [13, 22], "w_i": 13, "ind": [13, 23], "relat": 13, "given": [13, 16], "invers": 13, "proport": 13, "strictli": 13, "posit": [13, 16, 17], "current": [13, 16], "dual_": 13, "obj": 14, "more": 14, "detail": 14, "algorithm": 14, "nonconvex": 14, "applic": 14, "biolog": 14, "breheni": 14, "huang": 14, "prox": 14, "hard": 14, "should": [14, 31], "larger": 14, "multipli": 15, "l21": 15, "until": [15, 16], "dualiti": [15, 16], "gap": [15, 16], "represent": 15, "log": [16, 19], "exp": [16, 19], "x_i": 16, "_1": 16, "so": 16, "far": 16, "classes_": 16, "ndarrai": 16, "n_class": 16, "known": 16, "classifi": 16, "Not": 16, "yet": 16, "weights_j": 17, "part": 17, "unweight": 17, "delta": 18, "sum_": [18, 28, 29], "xw_i": [18, 19], "grp_ptr": [21, 29], "grp_indic": [21, 29], "group": [21, 29, 31], "stack": [21, 29], "contigu": [21, 29], "grp1_indic": [21, 29], "grp2_indic": [21, 29], "n_group": [21, 29], "pointer": [21, 29], "consecut": [21, 29], "element": [21, 29], "delimit": [21, 29], "box": 23, "constraint": 23, "ind_": 23, "l_": [24, 27], "quasi": [24, 27], "aka": 26, "g": [29, 31], "w_g": 29, "_2": 29, "librari": 31, "provid": 31, "better": 31, "Its": 31, "main": 31, "speed": 31, "million": 31, "reli": 31, "effici": 31, "flexibl": 31, "virtual": 31, "line": 31, "drop": 31, "scope": 31, "miss": 31, "etc": 31, "pleas": 31, "onlin": 31, "beyond": 31, "q": 31, "p": 31, "gidel": 31, "journal": 31, "arxiv": 31, "preprint": 31, "2204": 31, "07826": 31, "url": 31, "http": 31, "org": 31, "pdf": 31, "year": 31, "2022": 31, "clone": 31, "repositori": 31, "avail": 31, "github": 31, "contrib": 31, "git": 31, "Then": 31, "packag": 31, "pip": 31, "check": 31, "everyth": 31, "fine": 31, "do": 31, "give": 31, "error": 31, "messag": 31, "document": 31}, "objects": {"skglm": [[10, 0, 1, "", "ElasticNet"], [11, 0, 1, "", "GeneralizedLinearEstimator"], [12, 0, 1, "", "Lasso"], [13, 0, 1, "", "LinearSVC"], [14, 0, 1, "", "MCPRegression"], [15, 0, 1, "", "MultiTaskLasso"], [16, 0, 1, "", "SparseLogisticRegression"], [17, 0, 1, "", "WeightedLasso"]], "skglm.ElasticNet": [[10, 1, 1, "", "__init__"]], "skglm.GeneralizedLinearEstimator": [[11, 1, 1, "", "__init__"]], "skglm.Lasso": [[12, 1, 1, "", "__init__"]], "skglm.LinearSVC": [[13, 1, 1, "", "__init__"]], "skglm.MCPRegression": [[14, 1, 1, "", "__init__"]], "skglm.MultiTaskLasso": [[15, 1, 1, "", "__init__"]], "skglm.SparseLogisticRegression": [[16, 1, 1, "", "__init__"]], "skglm.WeightedLasso": [[17, 1, 1, "", "__init__"]], "skglm.datafits": [[18, 0, 1, "", "Huber"], [19, 0, 1, "", "Logistic"], [20, 0, 1, "", "Quadratic"], [21, 0, 1, "", "QuadraticGroup"], [22, 0, 1, "", "QuadraticSVC"]], "skglm.datafits.Huber": [[18, 1, 1, "", "__init__"]], "skglm.datafits.Logistic": [[19, 1, 1, "", "__init__"]], "skglm.datafits.Quadratic": [[20, 1, 1, "", "__init__"]], "skglm.datafits.QuadraticGroup": [[21, 1, 1, "", "__init__"]], "skglm.datafits.QuadraticSVC": [[22, 1, 1, "", "__init__"]], "skglm.penalties": [[23, 0, 1, "", "IndicatorBox"], [24, 0, 1, "", "L0_5"], [25, 0, 1, "", "L1"], [26, 0, 1, "", "L1_plus_L2"], [27, 0, 1, "", "L2_3"], [28, 0, 1, "", "MCPenalty"], [29, 0, 1, "", "WeightedGroupL2"], [30, 0, 1, "", "WeightedL1"]], "skglm.penalties.IndicatorBox": [[23, 1, 1, "", "__init__"]], "skglm.penalties.L0_5": [[24, 1, 1, "", "__init__"]], "skglm.penalties.L1": [[25, 1, 1, "", "__init__"]], "skglm.penalties.L1_plus_L2": [[26, 1, 1, "", "__init__"]], "skglm.penalties.L2_3": [[27, 1, 1, "", "__init__"]], "skglm.penalties.MCPenalty": [[28, 1, 1, "", "__init__"]], "skglm.penalties.WeightedGroupL2": [[29, 1, 1, "", "__init__"]], "skglm.penalties.WeightedL1": [[30, 1, 1, "", "__init__"]]}, "objtypes": {"0": "py:class", "1": "py:method"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"]}, "titleterms": {"how": 0, "add": 0, "custom": 0, "penalti": [0, 1, 5, 6, 7, 23, 24, 25, 26, 27, 28, 29, 30], "datafit": [0, 1, 18, 19, 20, 21, 22], "api": [1, 31], "document": 1, "estim": 1, "exampl": 2, "galleri": 2, "time": [3, 9], "comparison": [3, 4], "scikit": 3, "learn": 3, "lasso": [3, 4, 8, 12], "weight": [4, 8], "logist": [5, 19], "regress": 5, "elast": 5, "net": 5, "minimax": 5, "concav": 5, "valu": 6, "proxim": 6, "oper": 6, "spars": 7, "recoveri": 7, "non": 7, "convex": 7, "some": 8, "zero": 8, "comput": 9, "skglm": [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "elasticnet": 10, "generalizedlinearestim": 11, "linearsvc": 13, "mcpregress": 14, "multitasklasso": 15, "sparselogisticregress": 16, "weightedlasso": 17, "huber": 18, "quadrat": 20, "quadraticgroup": 21, "quadraticsvc": 22, "indicatorbox": 23, "l0_5": 24, "l1": 25, "l1_plus_l2": 26, "l2_3": 27, "mcpenalti": 28, "weightedgroupl2": 29, "weightedl1": 30, "cite": 31, "instal": 31, "develop": 31, "version": 31}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})