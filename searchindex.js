Search.setIndex({"docnames": ["add", "api", "auto_examples/index", "auto_examples/plot_compare_time", "auto_examples/plot_lasso_vs_weighted", "auto_examples/plot_logreg_various_penalties", "auto_examples/plot_pen_prox", "auto_examples/plot_sparse_recovery", "auto_examples/plot_zero_weights_lasso", "auto_examples/sg_execution_times", "changes/0.1", "changes/0.2", "generated/skglm.ElasticNet", "generated/skglm.GeneralizedLinearEstimator", "generated/skglm.Lasso", "generated/skglm.LinearSVC", "generated/skglm.MCPRegression", "generated/skglm.MultiTaskLasso", "generated/skglm.SparseLogisticRegression", "generated/skglm.WeightedLasso", "generated/skglm.datafits.Huber", "generated/skglm.datafits.Logistic", "generated/skglm.datafits.Quadratic", "generated/skglm.datafits.QuadraticGroup", "generated/skglm.datafits.QuadraticSVC", "generated/skglm.experimental.SqrtLasso", "generated/skglm.penalties.BlockSCAD", "generated/skglm.penalties.IndicatorBox", "generated/skglm.penalties.L0_5", "generated/skglm.penalties.L1", "generated/skglm.penalties.L1_plus_L2", "generated/skglm.penalties.L2_3", "generated/skglm.penalties.MCPenalty", "generated/skglm.penalties.SCAD", "generated/skglm.penalties.WeightedGroupL2", "generated/skglm.penalties.WeightedL1", "generated/skglm.solvers.AndersonCD", "generated/skglm.solvers.GramCD", "generated/skglm.solvers.GroupBCD", "generated/skglm.solvers.MultiTaskBCD", "generated/skglm.solvers.ProxNewton", "index", "whats_new"], "filenames": ["add.rst", "api.rst", "auto_examples/index.rst", "auto_examples/plot_compare_time.rst", "auto_examples/plot_lasso_vs_weighted.rst", "auto_examples/plot_logreg_various_penalties.rst", "auto_examples/plot_pen_prox.rst", "auto_examples/plot_sparse_recovery.rst", "auto_examples/plot_zero_weights_lasso.rst", "auto_examples/sg_execution_times.rst", "changes/0.1.rst", "changes/0.2.rst", "generated/skglm.ElasticNet.rst", "generated/skglm.GeneralizedLinearEstimator.rst", "generated/skglm.Lasso.rst", "generated/skglm.LinearSVC.rst", "generated/skglm.MCPRegression.rst", "generated/skglm.MultiTaskLasso.rst", "generated/skglm.SparseLogisticRegression.rst", "generated/skglm.WeightedLasso.rst", "generated/skglm.datafits.Huber.rst", "generated/skglm.datafits.Logistic.rst", "generated/skglm.datafits.Quadratic.rst", "generated/skglm.datafits.QuadraticGroup.rst", "generated/skglm.datafits.QuadraticSVC.rst", "generated/skglm.experimental.SqrtLasso.rst", "generated/skglm.penalties.BlockSCAD.rst", "generated/skglm.penalties.IndicatorBox.rst", "generated/skglm.penalties.L0_5.rst", "generated/skglm.penalties.L1.rst", "generated/skglm.penalties.L1_plus_L2.rst", "generated/skglm.penalties.L2_3.rst", "generated/skglm.penalties.MCPenalty.rst", "generated/skglm.penalties.SCAD.rst", "generated/skglm.penalties.WeightedGroupL2.rst", "generated/skglm.penalties.WeightedL1.rst", "generated/skglm.solvers.AndersonCD.rst", "generated/skglm.solvers.GramCD.rst", "generated/skglm.solvers.GroupBCD.rst", "generated/skglm.solvers.MultiTaskBCD.rst", "generated/skglm.solvers.ProxNewton.rst", "index.rst", "whats_new.rst"], "titles": ["How to add a custom penalty", "API Documentation", "Examples Gallery", "Timing comparison with scikit-learn for Lasso", "Comparison of Lasso and Weighted Lasso", "Logistic regression with Elastic net and minimax concave penalties", "Value and proximal operators of penalties", "Sparse recovery with non-convex penalties", "Weighted Lasso with some zero weights", "Computation times", "Version 0.1 (2022-04-25)", "Version 0.2 (in progress)", "skglm.ElasticNet", "skglm.GeneralizedLinearEstimator", "skglm.Lasso", "skglm.LinearSVC", "skglm.MCPRegression", "skglm.MultiTaskLasso", "skglm.SparseLogisticRegression", "skglm.WeightedLasso", "skglm.datafits.Huber", "skglm.datafits.Logistic", "skglm.datafits.Quadratic", "skglm.datafits.QuadraticGroup", "skglm.datafits.QuadraticSVC", "skglm.experimental.SqrtLasso", "skglm.penalties.BlockSCAD", "skglm.penalties.IndicatorBox", "skglm.penalties.L0_5", "skglm.penalties.L1", "skglm.penalties.L1_plus_L2", "skglm.penalties.L2_3", "skglm.penalties.MCPenalty", "skglm.penalties.SCAD", "skglm.penalties.WeightedGroupL2", "skglm.penalties.WeightedL1", "skglm.solvers.AndersonCD", "skglm.solvers.GramCD", "skglm.solvers.GroupBCD", "skglm.solvers.MultiTaskBCD", "skglm.solvers.ProxNewton", "skglm", "What\u2019s new"], "terms": {"With": [0, 26, 32, 33], "skglm": [0, 3, 4, 5, 6, 7, 8], "you": [0, 41], "can": [0, 12, 14, 15, 16, 17, 19, 37, 41], "solv": [0, 3, 12, 13, 14, 15, 16, 17, 18, 19, 41], "ani": [0, 5, 41], "gener": [0, 2, 3, 4, 5, 6, 7, 8, 13, 40, 41], "linear": [0, 13, 16, 40, 41], "model": [0, 3, 36, 38, 40, 41], "arbitrari": [0, 41], "smooth": [0, 15], "proxim": [0, 2, 9, 11, 42], "defin": [0, 7], "two": [0, 5, 23, 34], "class": [0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42], "thei": [0, 5], "pass": [0, 5], "generalizedlinearestim": [0, 5], "clf": [0, 8], "mydatafit": 0, "mypenalti": 0, "A": [0, 18, 24, 36, 37, 40, 41], "i": [0, 8, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 36, 37, 38, 40, 41], "jitclass": 0, "which": [0, 7, 37], "must": [0, 15, 18], "inherit": 0, "from": [0, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 19, 42], "basepenalti": [0, 13], "base": [0, 11, 14, 19, 25, 37, 42], "subclass": 0, "abstractmethod": 0, "def": [0, 3], "get_spec": 0, "self": 0, "specifi": [0, 12, 13, 14, 15, 16, 17, 18, 19], "numba": [0, 41], "type": 0, "attribut": [0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 34, 37, 38], "return": [0, 3], "spec": 0, "tupl": 0, "attribute_nam": 0, "dtype": 0, "compil": [0, 3, 13, 41], "params_to_dict": 0, "get": 0, "paramet": [0, 5, 12, 13, 14, 15, 16, 17, 18, 19, 25, 34], "initi": [0, 10, 12, 13, 14, 15, 16, 17, 18, 19, 37, 38, 42], "an": [0, 12, 13, 14, 15, 16, 17, 18, 19, 36, 37, 40], "instanc": [0, 13], "dict_of_param": 0, "dict": 0, "The": [0, 5, 8, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 34, 36], "instanti": 0, "object": [0, 3, 12, 14, 15, 16, 17, 18, 19, 25], "valu": [0, 2, 7, 9, 26, 32, 33, 37, 38], "w": [0, 3, 7, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 37], "vector": [0, 12, 14, 15, 16, 17, 19, 37, 38], "prox_1d": [0, 6], "stepsiz": 0, "j": [0, 7, 26, 32, 33, 40], "oper": [0, 2, 9], "featur": [0, 4, 8, 16, 18, 19, 25, 36, 37, 40, 41], "subdiff_dist": 0, "grad": 0, "distanc": 0, "neg": 0, "gradient": [0, 20, 21, 22, 24, 37], "subdifferenti": 0, "arrai": [0, 6, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 34, 37, 38], "shape": [0, 4, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 34, 37, 38], "n_featur": [0, 4, 5, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 32, 33, 34, 37, 38, 42], "coeffici": [0, 5, 18, 37, 38], "0": [0, 3, 4, 5, 6, 7, 8, 9, 12, 14, 15, 16, 17, 18, 19, 21, 22, 25, 27, 28, 32, 33, 36, 37, 38, 39, 40], "restrict": [0, 36], "ws_size": 0, "indic": [0, 23, 27, 34], "work": [0, 11, 12, 14, 15, 16, 17, 19, 25, 36, 38, 40, 41, 42], "set": [0, 5, 11, 12, 14, 15, 16, 17, 18, 19, 25, 27, 36, 37, 38, 40, 42], "is_pen": 0, "binari": [0, 3, 18], "mask": 0, "penal": [0, 4, 8, 16], "generalized_support": 0, "r": [0, 7, 8], "true": [0, 3, 4, 5, 6, 7, 8, 12, 14, 15, 16, 17, 18, 19, 36, 37, 39, 40], "support": [0, 19, 41], "To": [0, 15, 41], "implement": [0, 41], "your": 0, "own": 0, "onli": [0, 37], "need": 0, "new": [0, 41], "its": 0, "kkt": 0, "violat": 0, "ar": [0, 19, 41], "comput": [0, 7, 8, 22, 37], "For": [0, 12, 16], "exampl": [0, 3, 4, 5, 6, 7, 8], "l1": [0, 6, 7, 12, 13, 14, 19, 30, 35, 36, 41], "__init__": [0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], "alpha": [0, 3, 4, 5, 6, 7, 8, 12, 14, 16, 17, 18, 19, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "float64": 0, "np": [0, 3, 4, 5, 6, 7, 8, 16], "sum": [0, 3], "ab": [0, 3, 4, 8, 32, 33, 36, 40], "soft": [0, 16], "threshold": [0, 16], "st": 0, "zeros_lik": [0, 7], "idx": [0, 7], "enumer": [0, 7], "grad_j": 0, "max": [0, 3, 4, 7, 8, 15], "els": [0, 17], "sign": [0, 5], "ones": 0, "bool_": 0, "non": [0, 2, 9, 11, 15, 28, 31, 32, 41, 42], "zero": [0, 2, 4, 7, 9, 37, 38], "alpha_max": [0, 4, 7, 8], "gradient0": 0, "solut": [0, 7, 12, 14, 15, 16, 17, 18, 19], "basedatafit": [0, 13], "x": [0, 3, 4, 5, 6, 7, 8, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 32, 33, 37], "y": [0, 3, 4, 5, 7, 8, 12, 14, 15, 16, 17, 19, 22, 23, 24, 25, 37], "pre": [0, 22], "befor": 0, "fit": [0, 3, 4, 5, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 36, 38, 40, 42], "n_sampl": [0, 4, 5, 7, 8, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 27, 37, 38, 42], "design": 0, "matrix": [0, 12, 13, 14, 15, 16, 17, 19, 37], "target": 0, "initialize_spars": 0, "x_data": 0, "x_indptr": 0, "x_indic": 0, "when": [0, 4, 12, 13, 14, 15, 16, 17, 18, 19, 37], "spars": [0, 2, 6, 9, 12, 13, 14, 15, 16, 17, 18, 19, 32, 36, 40, 41], "n_element": 0, "data": [0, 5, 7], "csc": 0, "1": [0, 3, 4, 6, 7, 8, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 32, 33, 34, 36, 37, 40], "indptr": 0, "xw": [0, 37], "array_lik": 0, "float": [0, 12, 14, 15, 16, 17, 18, 19, 25, 34, 36, 37, 38, 40], "gradient_scalar": 0, "respect": 0, "th": [0, 26], "coordin": [0, 11, 13, 16, 36, 37, 38, 39, 41, 42], "int": [0, 3, 7, 12, 13, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 40], "evalu": [0, 22], "gradient_scalar_spars": 0, "dimens": 0, "along": 0, "method": [0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], "declar": 0, "see": [0, 16], "quadrat": [0, 7, 11, 13, 23, 24, 37, 42], "read": [0, 20, 21, 22, 23, 24, 34], "2": [0, 3, 4, 5, 6, 7, 8, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 26, 31, 32, 33, 36, 37, 40], "2_2": [0, 12, 14, 15, 16, 17, 19, 22, 23, 24], "xty": [0, 22], "quantiti": [0, 22], "us": [0, 4, 5, 8, 12, 14, 15, 16, 17, 19, 22, 23, 24, 36, 37, 38, 41], "dure": [0, 22], "equal": [0, 16, 19, 21, 22], "t": [0, 3, 4, 7, 8, 15, 18, 22, 24, 37, 40], "lipschitz": [0, 20, 21, 22, 23, 24], "coordinatewis": [0, 20, 21, 22, 24], "constant": [0, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], "norm": [0, 3, 4, 5, 7, 14, 19, 21, 22, 28, 31, 37, 41], "axi": [0, 4, 5, 7, 21, 22], "note": [0, 19, 26, 27, 32, 33], "jit": [0, 13], "time": [0, 2, 4, 5, 6, 7, 8, 41], "thi": [0, 8, 13, 15, 37, 41], "allow": [0, 8], "faster": [0, 36], "rang": [0, 3, 7], "len": [0, 3, 4, 5, 7, 8], "nrm2": 0, "xjtxw": 0, "full_grad_spars": 0, "intercept_update_step": 0, "mean": [0, 18], "penalti": [2, 3, 8, 9, 11, 12, 13, 14, 15, 16, 17, 19, 23, 25, 37, 41, 42], "comparison": [2, 9], "lasso": [2, 7, 9, 11, 12, 16, 19, 25, 41, 42], "weight": [2, 6, 9, 14, 19, 34, 35, 41], "some": [2, 4, 6, 9], "logist": [2, 9, 11, 18, 42], "regress": [2, 9, 13, 16, 18], "elast": [2, 9, 12], "net": [2, 9, 12], "minimax": [2, 9, 32], "concav": [2, 9, 32], "scikit": [2, 9, 41], "learn": [2, 9, 41], "recoveri": [2, 9], "convex": [2, 9, 27, 28, 31, 32, 41], "download": [2, 3, 4, 5, 6, 7, 8], "all": [2, 7, 8, 41], "python": [2, 3, 4, 5, 6, 7, 8, 41], "sourc": [2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], "code": [2, 3, 4, 5, 6, 7, 8, 36, 40, 41], "auto_examples_python": 2, "zip": [2, 3], "jupyt": [2, 3, 4, 5, 6, 7, 8], "notebook": [2, 3, 4, 5, 6, 7, 8], "auto_examples_jupyt": 2, "sphinx": [2, 3, 4, 5, 6, 7, 8], "click": [3, 4, 5, 6, 7, 8], "here": [3, 4, 5, 6, 7, 8], "full": [3, 4, 5, 6, 7, 8], "compar": 3, "larg": [3, 8], "scale": [3, 40], "problem": [3, 11, 13, 15, 18, 36, 38, 39, 41, 42], "file_s": 3, "00": [3, 9], "26": [3, 11, 42], "8m": 3, "b": [3, 40], "": [3, 5, 7, 40, 41], "24": 3, "6k": 3, "03": 3, "37": 3, "123kb": 3, "49": 3, "2k": 3, "38": 3, "122kb": 3, "106k": 3, "02": [3, 7, 9], "15": 3, "197kb": 3, "221k": 3, "01": [3, 9], "17": 3, "344kb": 3, "4": [3, 4, 6, 7, 21, 25, 37, 38, 40], "451k": 3, "41": 3, "630kb": 3, "3": [3, 4, 5, 6, 7, 8, 16, 31], "9": [3, 5], "909k": 3, "21": [3, 17], "19mb": 3, "7": [3, 6, 7], "83m": 3, "10": [3, 4, 8, 12, 14, 15, 16, 17, 19, 25, 36, 38, 39, 40], "29mb": 3, "14": [3, 11, 42], "5": [3, 4, 7, 8, 12, 28, 37], "66m": 3, "05": [3, 9], "44mb": 3, "20": [3, 10, 18, 25, 40, 42], "23m": 3, "50mb": 3, "25": 3, "6": [3, 5, 7], "81m": 3, "22mb": 3, "35": 3, "43m": 3, "8": [3, 6, 7], "11": 3, "0m": 3, "11mb": 3, "47": [3, 9], "12": [3, 7, 11, 42], "6m": 3, "04mb": 3, "57": [3, 11, 42], "2m": 3, "46mb": 3, "63": [3, 11, 42], "16": 3, "01mb": 3, "68": 3, "18": 3, "3m": 3, "70mb": 3, "78": 3, "93mb": 3, "84": 3, "22": 3, "5m": 3, "36mb": 3, "94": 3, "4mb": 3, "100": [3, 5, 8, 25, 37, 38, 39], "96mb": 3, "import": [3, 4, 5, 6, 7, 8, 41], "warn": 3, "numpi": [3, 4, 5, 6, 7, 8], "linalg": [3, 4, 5, 7], "matplotlib": [3, 4, 5, 6, 7, 8], "pyplot": [3, 4, 5, 6, 7, 8], "plt": [3, 4, 5, 6, 7, 8], "libsvmdata": 3, "fetch_libsvm": 3, "sklearn": [3, 5, 7, 41], "except": 3, "convergencewarn": 3, "linear_model": 3, "lasso_sklearn": 3, "elasticnet": [3, 30], "enet_sklearn": 3, "filterwarn": 3, "ignor": 3, "categori": 3, "compute_obj": 3, "l1_ratio": [3, 5, 6, 12, 30], "loss": [3, 15], "news20": 3, "dict_sklearn": 3, "fit_intercept": [3, 4, 7, 8, 12, 14, 15, 16, 17, 18, 19, 36, 37, 38, 39, 40], "fals": [3, 4, 6, 7, 8, 12, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 39, 40], "tol": [3, 12, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 39, 40], "1e": [3, 7, 25, 37, 38, 39, 40], "enet": 3, "dict_our": 3, "fig": [3, 4, 6, 7, 8], "axarr": [3, 4, 6, 7, 8], "subplot": [3, 4, 6, 7, 8], "constrained_layout": [3, 6, 7, 8], "ax": 3, "pobj_dict": 3, "list": [3, 18], "u": 3, "time_dict": 3, "remov": [3, 5], "max_it": [3, 12, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 39, 40], "10_000": 3, "w_star": [3, 5], "coef_": [3, 4, 5, 8, 12, 13, 14, 15, 16, 17, 18, 19], "pobj_star": 3, "n_iter_sklearn": 3, "uniqu": 3, "geomspac": [3, 7], "50": [3, 4, 5, 8, 12, 14, 15, 16, 17, 19, 36], "num": [3, 6, 7], "astyp": 3, "t_start": 3, "w_sklearn": 3, "append": 3, "n_iter_u": 3, "semilogi": 3, "label": [3, 5, 6, 7, 18, 21], "set_ylim": [3, 7], "set_titl": [3, 4, 6, 8], "legend": [3, 5, 6, 7], "set_ylabel": [3, 7], "suboptim": 3, "set_xlabel": [3, 7, 8], "show": [3, 4, 5, 6, 7, 8], "block": [3, 4, 6, 7, 8, 11, 26, 36, 38, 39, 42], "total": [3, 4, 5, 6, 7, 8, 9], "run": [3, 4, 5, 6, 7, 8, 13], "script": [3, 4, 5, 6, 7, 8], "minut": [3, 4, 5, 6, 7, 8], "609": [3, 9], "second": [3, 4, 5, 6, 7, 8, 41], "plot_compare_tim": [3, 9], "py": [3, 4, 5, 6, 7, 8, 9], "ipynb": [3, 4, 5, 6, 7, 8], "galleri": [3, 4, 5, 6, 7, 8], "illustr": [4, 5, 6, 7], "normal": 4, "author": [4, 5, 6, 7, 41], "mathurin": [4, 6, 7], "massia": [4, 6, 7, 36, 40, 41], "quentin": [4, 7], "bertrand": [4, 7, 36, 41], "weightedlasso": [4, 8, 14], "util": [4, 5, 7, 8], "make_correlated_data": [4, 5, 7, 8], "30": [4, 7], "_": [4, 5, 17], "random_st": [4, 5, 7, 8], "w_true": [4, 7, 8], "nnz": 4, "assum": 4, "reason": 4, "have": 4, "smaller": 4, "than": [4, 14, 16, 19], "other": 4, "nois": 4, "random": [4, 7, 8], "randn": 4, "signal": 4, "ratio": 4, "doe": 4, "select": [4, 16, 37], "small": [4, 8], "while": 4, "la": 4, "wei": 4, "sharei": [4, 7, 8], "figsiz": [4, 6, 7, 8], "stem": [4, 5, 8], "coeff": 4, "042": [4, 9], "plot_lasso_vs_weight": [4, 9], "modular": 5, "one": 5, "datafit": [5, 7, 11, 13, 15, 37, 41, 42], "home": 5, "circleci": 5, "project": 5, "plot_logreg_various_penalti": [5, 9], "53": 5, "matplotlibdeprecationwarn": 5, "use_line_collect": 5, "wa": 5, "deprec": 5, "minor": 5, "releas": [5, 10, 42], "later": 5, "If": [5, 13, 16, 17, 19, 37, 38, 40, 41], "follow": 5, "should": [5, 16, 37, 41], "keyword": 5, "position": 5, "m": [5, 36, 40, 41], "61": 5, "69": 5, "pierr": 5, "antoin": 5, "bannier": [5, 36, 41], "metric": [5, 7], "f1_score": [5, 7], "l1_plus_l2": [5, 6], "mcpenalti": [5, 6, 7], "y_ind": 5, "standard": [5, 7], "mcp": [5, 7, 16, 32], "sqrt": [5, 7, 25], "split": 5, "train": 5, "test": 5, "x_train": 5, "y_train": 5, "x_test": [5, 7], "y_test": [5, 7], "005": 5, "gamma": [5, 6, 7, 16, 26, 32, 33], "clf_enet": 5, "y_pred_enet": 5, "predict": 5, "f1_score_enet": 5, "clf_mcp": 5, "y_pred_mcp": 5, "f1_score_mcp": 5, "where": [5, 20, 27, 37], "ravel": 5, "markerfmt": 5, "setp": 5, "color": [5, 7], "2ca02c": 5, "ff7f0e": 5, "bx": 5, "loc": [5, 7], "best": 5, "titl": [5, 41], "f1": [5, 7], "3f": 5, "004": [5, 9], "gmail": 6, "com": [6, 36, 40, 41], "weightedl1": 6, "scad": [6, 7, 11, 42], "l0_5": [6, 7], "l2_3": [6, 7], "x_rang": 6, "linspac": 6, "300": 6, "pen": [6, 16, 26, 32, 33], "plot": [6, 7], "__class__": 6, "__name__": 6, "593": [6, 9], "plot_pen_prox": [6, 9], "superior": 7, "perform": 7, "l05": 7, "l23": 7, "klopfenstein": [7, 36, 41], "model_select": 7, "train_test_split": 7, "mean_squared_error": 7, "solver": [7, 8, 11, 13, 14, 19, 25, 41, 42], "andersoncd": [7, 13], "compiled_clon": 7, "cmap": 7, "get_cmap": 7, "tab10": 7, "simul": 7, "1000": [7, 18, 25, 38, 40], "densiti": 7, "seed": [7, 8], "supp": 7, "choic": [7, 8], "size": [7, 12, 14, 15, 16, 17, 19, 36], "replac": [7, 8, 13, 41], "x_": 7, "y_": 7, "snr": 7, "rho": 7, "test_siz": 7, "lead": 7, "ord": 7, "inf": [7, 16], "n_alpha": 7, "estimation_error": 7, "prediction_error": 7, "l0": 7, "mse_ref": 7, "ws_strategi": [7, 12, 14, 15, 16, 17, 19, 36, 39], "fixpoint": [7, 12, 14, 15, 16, 17, 19, 36], "estim": [7, 12, 13, 14, 15, 16, 17, 18, 19, 25, 41], "kei": 7, "print": 7, "f": [7, 20], "estimator_path": 7, "path": 7, "f1_temp": 7, "prediction_error_temp": 7, "name_estim": 7, "ell_": 7, "close": 7, "sharex": 7, "semilogx": 7, "c": [7, 15, 40, 41], "max_f1": 7, "argmax": 7, "vline": 7, "ymin": 7, "ymax": 7, "linestyl": 7, "line1": 7, "clip_on": 7, "marker": 7, "markers": 7, "min_error": 7, "argmin": 7, "lim": 7, "get_ylim": 7, "min": 7, "line2": 7, "lambda": 7, "lambda_": 7, "mathrm": 7, "score": [7, 12, 14, 15, 16, 17, 19, 36], "pred": 7, "rmse": 7, "left": 7, "out": 7, "bbox_to_anchor": 7, "lower": 7, "mode": 7, "expand": 7, "borderaxespad": 7, "ncol": 7, "927": [7, 9], "plot_sparse_recoveri": [7, 9], "demonstr": 8, "how": 8, "vanish": 8, "fast": 8, "adapt": 8, "primal": [8, 14, 15, 19], "anderson": [8, 36], "acceler": [8, 11, 36, 42], "dual": [8, 15, 40], "handl": [8, 13, 18], "empti": 8, "unpen": [8, 19, 40], "first": [8, 12, 14, 15, 16, 17, 19, 36, 41], "put": 8, "last": 8, "arang": 8, "coef": 8, "neq": 8, "heavili": 8, "few": [8, 41], "lightli": 8, "mani": [8, 41], "index": 8, "338": [8, 9], "plot_zero_weights_lasso": [8, 9], "13": 9, "513": 9, "execut": 9, "auto_exampl": 9, "file": 9, "mb": 9, "09": 9, "08": 9, "commit": [10, 42], "experiment": [11, 42], "squar": [11, 25, 42], "root": [11, 25, 42], "proxnewton": [11, 42], "chambol": [11, 42], "pock": [11, 42], "pr": [11, 42], "descent": [11, 13, 16, 36, 37, 38, 39, 41, 42], "groupbcd": [11, 42], "group": [11, 23, 34, 38, 41, 42], "29": [11, 42], "28": [11, 42], "newton": [11, 18, 25, 40, 42], "51": [11, 42], "huber": [11, 42], "ad": [11, 42], "blockscad": [11, 42], "intercept": [11, 12, 14, 15, 16, 17, 18, 19, 36, 40, 42], "55": [11, 42], "gramcd": [11, 42], "gram": [11, 37, 42], "ll": [11, 42], "59": [11, 42], "transform": [11, 42], "function": [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 27, 42], "max_epoch": [12, 14, 15, 16, 17, 18, 19, 36, 38, 39], "50000": [12, 14, 15, 16, 17, 19, 36, 39], "p0": [12, 14, 15, 16, 17, 19, 25, 36, 38, 39, 40], "verbos": [12, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 39, 40], "0001": [12, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 40], "warm_start": [12, 14, 15, 16, 17, 18, 19, 36, 37, 38, 39, 40], "subdiff": [12, 14, 15, 16, 17, 19, 36, 39], "optim": [12, 13, 14, 15, 16, 17, 18, 19, 25, 36, 40], "sum_j": [12, 14, 19], "w_j": [12, 14, 16, 19, 26, 32, 33], "option": [12, 13, 14, 15, 16, 17, 18, 19, 36], "strength": [12, 14, 15, 16, 17, 18, 19, 25], "default": [12, 14, 15, 16, 17, 18, 19, 25, 37, 38, 40, 41], "mix": 12, "l2": [12, 15, 30, 34], "combin": [12, 40, 41], "maximum": [12, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 40], "number": [12, 13, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 40], "iter": [12, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 40], "subproblem": [12, 13, 14, 15, 16, 17, 18, 19, 25, 36, 40], "definit": [12, 14, 15, 16, 17, 18, 19, 36], "cd": [12, 14, 15, 16, 17, 19, 36, 41], "epoch": [12, 14, 15, 16, 17, 19, 36, 37, 38], "each": [12, 14, 15, 16, 17, 18, 19, 23, 25, 36, 40], "bool": [12, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 40], "amount": [12, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 40], "stop": [12, 14, 15, 16, 17, 18, 19], "criterion": [12, 14, 15, 16, 17, 18, 19], "whether": [12, 14, 15, 16, 17, 18, 19, 36], "reus": [12, 14, 15, 16, 17, 18, 19], "previou": [12, 14, 15, 16, 17, 18, 19], "call": [12, 13, 14, 15, 16, 17, 18, 19], "otherwis": [12, 14, 15, 16, 17, 18, 19, 37], "just": [12, 14, 15, 16, 17, 18, 19, 41], "eras": [12, 14, 15, 16, 17, 18, 19], "str": [12, 14, 15, 16, 17, 19], "build": [12, 14, 15, 16, 17, 19, 36], "regular": [12, 14, 15, 16, 17, 18, 19, 34], "cost": [12, 13, 14, 15, 16, 17, 19], "formula": [12, 13, 14, 15, 16, 17, 19], "sparse_coef_": [12, 13, 14, 15, 16, 17, 19], "scipi": [12, 13, 14, 15, 16, 17, 19], "readonli": [12, 13, 14, 15, 16, 17, 19], "properti": [12, 13, 14, 15, 16, 17, 19], "deriv": [12, 13, 14, 15, 16, 17, 19], "intercept_": [12, 13, 14, 15, 16, 17, 18, 19], "term": [12, 13, 14, 15, 16, 17, 18, 19], "decis": [12, 13, 14, 15, 16, 17, 18, 19], "n_iter_": [12, 13, 14, 15, 16, 17, 18, 19], "reach": [12, 13, 14, 15, 16, 17, 18, 19], "toler": [12, 13, 14, 15, 16, 17, 18, 19, 25, 36, 37, 38, 40], "none": [13, 19, 37, 38], "take": 13, "It": [13, 37], "classif": [13, 24], "task": [13, 24, 39], "basesolv": 13, "n_task": 13, "celer": [14, 17, 19, 40], "extrapol": [14, 19, 37, 40], "mcpregress": [14, 19], "sparser": [14, 19], "hing": 15, "sum_i": [15, 21], "y_i": [15, 18, 20, 21], "beta": 15, "e": [15, 19, 41], "we": 15, "stai": 15, "our": 15, "framework": 15, "svc": [15, 24], "w_i": 15, "ind": [15, 27], "relat": 15, "given": [15, 18], "invers": 15, "proport": 15, "strictli": 15, "posit": [15, 18, 19], "dual_": 15, "obj": 16, "more": 16, "detail": 16, "algorithm": [16, 40], "nonconvex": 16, "applic": 16, "biolog": 16, "breheni": 16, "huang": 16, "prox": [16, 18, 25, 40], "hard": 16, "larger": 16, "copy_x": 17, "multipli": 17, "l21": 17, "copi": 17, "mai": 17, "overwritten": 17, "log": [18, 21], "exp": [18, 21], "x_i": 18, "_1": [18, 25], "outer": [18, 25, 40], "classes_": 18, "ndarrai": 18, "n_class": 18, "known": 18, "classifi": 18, "Not": 18, "yet": 18, "weights_j": 19, "part": 19, "unweight": 19, "delta": 20, "sum_": [20, 26, 32, 33, 34], "xw_i": [20, 21], "grp_ptr": [23, 34], "grp_indic": [23, 34], "stack": [23, 34], "contigu": [23, 34], "grp1_indic": [23, 34], "grp2_indic": [23, 34], "n_group": [23, 34], "pointer": [23, 34], "consecut": [23, 34], "element": [23, 34], "delimit": [23, 34], "max_pn_it": [25, 40], "_2": [25, 34], "minimum": [25, 38, 40], "includ": [25, 38, 40], "converg": [25, 37, 38, 40], "silent": [25, 36, 37, 38, 40], "smoothli": [26, 33], "clip": [26, 33], "absolut": [26, 33], "deviat": [26, 33], "row": 26, "box": 27, "constraint": 27, "ind_": 27, "l_": [28, 31], "quasi": [28, 31], "aka": 30, "g": [34, 36, 41], "w_g": 34, "resolut": 36, "refer": [36, 40], "q": [36, 37, 41], "p": [36, 41], "gidel": [36, 41], "beyond": [36, 41], "better": [36, 41], "2022": [36, 41], "http": [36, 40, 41], "arxiv": [36, 40, 41], "org": [36, 40, 41], "2204": [36, 41], "07826": [36, 41], "aistat": 36, "2021": 36, "proceed": [36, 40], "mlr": [36, 40], "press": [36, 40], "v130": 36, "bertrand21a": 36, "html": [36, 40], "github": [36, 40, 41], "mathurinm": [36, 40], "use_acc": [37, 39], "greedy_cd": 37, "keep": 37, "up": 37, "date": 37, "updat": 37, "come": 37, "overhead": 37, "suit": 37, "minim": 37, "rewritten": 37, "w_init": [37, 38], "instead": [37, 38], "past": 37, "greedi": 37, "strategi": 37, "cyclic": 37, "xw_init": 38, "06": 39, "multi": 39, "vaiter": 40, "gramfort": 40, "salmon": 40, "jmlr": 40, "2020": 40, "1907": 40, "05830": 40, "johnson": 40, "guestrin": 40, "blitz": 40, "principl": 40, "meta": 40, "icml": 40, "2015": 40, "v37": 40, "johnson15": 40, "tbjohn": 40, "blitzl1": 40, "librari": 41, "provid": 41, "Its": 41, "main": 41, "speed": 41, "million": 41, "reli": 41, "effici": 41, "flexibl": 41, "virtual": 41, "line": 41, "api": 41, "drop": 41, "scope": 41, "miss": 41, "etc": 41, "pleas": 41, "onlin": 41, "journal": 41, "preprint": 41, "url": 41, "pdf": 41, "year": 41, "clone": 41, "repositori": 41, "avail": 41, "contrib": 41, "git": 41, "Then": 41, "packag": 41, "pip": 41, "check": 41, "everyth": 41, "fine": 41, "do": 41, "give": 41, "error": 41, "messag": 41, "what": 41}, "objects": {"skglm": [[12, 0, 1, "", "ElasticNet"], [13, 0, 1, "", "GeneralizedLinearEstimator"], [14, 0, 1, "", "Lasso"], [15, 0, 1, "", "LinearSVC"], [16, 0, 1, "", "MCPRegression"], [17, 0, 1, "", "MultiTaskLasso"], [18, 0, 1, "", "SparseLogisticRegression"], [19, 0, 1, "", "WeightedLasso"]], "skglm.ElasticNet": [[12, 1, 1, "", "__init__"]], "skglm.GeneralizedLinearEstimator": [[13, 1, 1, "", "__init__"]], "skglm.Lasso": [[14, 1, 1, "", "__init__"]], "skglm.LinearSVC": [[15, 1, 1, "", "__init__"]], "skglm.MCPRegression": [[16, 1, 1, "", "__init__"]], "skglm.MultiTaskLasso": [[17, 1, 1, "", "__init__"]], "skglm.SparseLogisticRegression": [[18, 1, 1, "", "__init__"]], "skglm.WeightedLasso": [[19, 1, 1, "", "__init__"]], "skglm.datafits": [[20, 0, 1, "", "Huber"], [21, 0, 1, "", "Logistic"], [22, 0, 1, "", "Quadratic"], [23, 0, 1, "", "QuadraticGroup"], [24, 0, 1, "", "QuadraticSVC"]], "skglm.datafits.Huber": [[20, 1, 1, "", "__init__"]], "skglm.datafits.Logistic": [[21, 1, 1, "", "__init__"]], "skglm.datafits.Quadratic": [[22, 1, 1, "", "__init__"]], "skglm.datafits.QuadraticGroup": [[23, 1, 1, "", "__init__"]], "skglm.datafits.QuadraticSVC": [[24, 1, 1, "", "__init__"]], "skglm.experimental": [[25, 0, 1, "", "SqrtLasso"]], "skglm.experimental.SqrtLasso": [[25, 1, 1, "", "__init__"]], "skglm.penalties": [[26, 0, 1, "", "BlockSCAD"], [27, 0, 1, "", "IndicatorBox"], [28, 0, 1, "", "L0_5"], [29, 0, 1, "", "L1"], [30, 0, 1, "", "L1_plus_L2"], [31, 0, 1, "", "L2_3"], [32, 0, 1, "", "MCPenalty"], [33, 0, 1, "", "SCAD"], [34, 0, 1, "", "WeightedGroupL2"], [35, 0, 1, "", "WeightedL1"]], "skglm.penalties.BlockSCAD": [[26, 1, 1, "", "__init__"]], "skglm.penalties.IndicatorBox": [[27, 1, 1, "", "__init__"]], "skglm.penalties.L0_5": [[28, 1, 1, "", "__init__"]], "skglm.penalties.L1": [[29, 1, 1, "", "__init__"]], "skglm.penalties.L1_plus_L2": [[30, 1, 1, "", "__init__"]], "skglm.penalties.L2_3": [[31, 1, 1, "", "__init__"]], "skglm.penalties.MCPenalty": [[32, 1, 1, "", "__init__"]], "skglm.penalties.SCAD": [[33, 1, 1, "", "__init__"]], "skglm.penalties.WeightedGroupL2": [[34, 1, 1, "", "__init__"]], "skglm.penalties.WeightedL1": [[35, 1, 1, "", "__init__"]], "skglm.solvers": [[36, 0, 1, "", "AndersonCD"], [37, 0, 1, "", "GramCD"], [38, 0, 1, "", "GroupBCD"], [39, 0, 1, "", "MultiTaskBCD"], [40, 0, 1, "", "ProxNewton"]], "skglm.solvers.AndersonCD": [[36, 1, 1, "", "__init__"]], "skglm.solvers.GramCD": [[37, 1, 1, "", "__init__"]], "skglm.solvers.GroupBCD": [[38, 1, 1, "", "__init__"]], "skglm.solvers.MultiTaskBCD": [[39, 1, 1, "", "__init__"]], "skglm.solvers.ProxNewton": [[40, 1, 1, "", "__init__"]]}, "objtypes": {"0": "py:class", "1": "py:method"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"]}, "titleterms": {"how": 0, "add": 0, "custom": 0, "penalti": [0, 1, 5, 6, 7, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "datafit": [0, 1, 20, 21, 22, 23, 24], "api": 1, "document": 1, "estim": 1, "solver": [1, 36, 37, 38, 39, 40], "experiment": [1, 25], "exampl": 2, "galleri": 2, "time": [3, 9], "comparison": [3, 4], "scikit": 3, "learn": 3, "lasso": [3, 4, 8, 14], "weight": [4, 8], "logist": [5, 21], "regress": 5, "elast": 5, "net": 5, "minimax": 5, "concav": 5, "valu": 6, "proxim": 6, "oper": 6, "spars": 7, "recoveri": 7, "non": 7, "convex": 7, "some": 8, "zero": 8, "comput": 9, "version": [10, 11, 41, 42], "0": [10, 11, 42], "1": [10, 42], "2022": [10, 42], "04": [10, 42], "25": [10, 42], "2": [11, 42], "progress": [11, 42], "skglm": [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41], "elasticnet": 12, "generalizedlinearestim": 13, "linearsvc": 15, "mcpregress": 16, "multitasklasso": 17, "sparselogisticregress": 18, "weightedlasso": 19, "huber": 20, "quadrat": 22, "quadraticgroup": 23, "quadraticsvc": 24, "sqrtlasso": 25, "blockscad": 26, "indicatorbox": 27, "l0_5": 28, "l1": 29, "l1_plus_l2": 30, "l2_3": 31, "mcpenalti": 32, "scad": 33, "weightedgroupl2": 34, "weightedl1": 35, "andersoncd": 36, "gramcd": 37, "groupbcd": 38, "multitaskbcd": 39, "proxnewton": 40, "cite": 41, "instal": 41, "develop": 41, "releas": 41, "histori": 41, "what": 42, "": 42, "new": 42}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"How to add a custom penalty": [[0, "how-to-add-a-custom-penalty"]], "How to add a custom datafit": [[0, "how-to-add-a-custom-datafit"]], "API Documentation": [[1, "api-documentation"]], "Estimators": [[1, "estimators"]], "Penalties": [[1, "penalties"]], "Datafits": [[1, "datafits"]], "Solvers": [[1, "solvers"]], "Experimental": [[1, "experimental"]], "Examples Gallery": [[2, "examples-gallery"]], "Timing comparison with scikit-learn for Lasso": [[3, "timing-comparison-with-scikit-learn-for-lasso"]], "Comparison of Lasso and Weighted Lasso": [[4, "comparison-of-lasso-and-weighted-lasso"]], "Logistic regression with Elastic net and minimax concave penalties": [[5, "logistic-regression-with-elastic-net-and-minimax-concave-penalties"]], "Value and proximal operators of penalties": [[6, "value-and-proximal-operators-of-penalties"]], "Sparse recovery with non-convex penalties": [[7, "sparse-recovery-with-non-convex-penalties"]], "Weighted Lasso with some zero weights": [[8, "weighted-lasso-with-some-zero-weights"]], "Computation times": [[9, "computation-times"]], "Version 0.1 (2022-04-25)": [[10, "version-0-1-2022-04-25"], [42, "version-0-1-2022-04-25"]], "Version 0.2 (in progress)": [[11, "version-0-2-in-progress"], [42, "version-0-2-in-progress"]], "skglm.ElasticNet": [[12, "skglm-elasticnet"]], "skglm.GeneralizedLinearEstimator": [[13, "skglm-generalizedlinearestimator"]], "skglm.Lasso": [[14, "skglm-lasso"]], "skglm.LinearSVC": [[15, "skglm-linearsvc"]], "skglm.MCPRegression": [[16, "skglm-mcpregression"]], "skglm.MultiTaskLasso": [[17, "skglm-multitasklasso"]], "skglm.SparseLogisticRegression": [[18, "skglm-sparselogisticregression"]], "skglm.WeightedLasso": [[19, "skglm-weightedlasso"]], "skglm.datafits.Huber": [[20, "skglm-datafits-huber"]], "skglm.datafits.Logistic": [[21, "skglm-datafits-logistic"]], "skglm.datafits.Quadratic": [[22, "skglm-datafits-quadratic"]], "skglm.datafits.QuadraticGroup": [[23, "skglm-datafits-quadraticgroup"]], "skglm.datafits.QuadraticSVC": [[24, "skglm-datafits-quadraticsvc"]], "skglm.experimental.SqrtLasso": [[25, "skglm-experimental-sqrtlasso"]], "skglm.penalties.BlockSCAD": [[26, "skglm-penalties-blockscad"]], "skglm.penalties.IndicatorBox": [[27, "skglm-penalties-indicatorbox"]], "skglm.penalties.L0_5": [[28, "skglm-penalties-l0-5"]], "skglm.penalties.L1": [[29, "skglm-penalties-l1"]], "skglm.penalties.L1_plus_L2": [[30, "skglm-penalties-l1-plus-l2"]], "skglm.penalties.L2_3": [[31, "skglm-penalties-l2-3"]], "skglm.penalties.MCPenalty": [[32, "skglm-penalties-mcpenalty"]], "skglm.penalties.SCAD": [[33, "skglm-penalties-scad"]], "skglm.penalties.WeightedGroupL2": [[34, "skglm-penalties-weightedgroupl2"]], "skglm.penalties.WeightedL1": [[35, "skglm-penalties-weightedl1"]], "skglm.solvers.AndersonCD": [[36, "skglm-solvers-andersoncd"]], "skglm.solvers.GramCD": [[37, "skglm-solvers-gramcd"]], "skglm.solvers.GroupBCD": [[38, "skglm-solvers-groupbcd"]], "skglm.solvers.MultiTaskBCD": [[39, "skglm-solvers-multitaskbcd"]], "skglm.solvers.ProxNewton": [[40, "skglm-solvers-proxnewton"]], "skglm": [[41, "skglm"]], "Cite": [[41, "cite"]], "Installing the development version": [[41, "installing-the-development-version"]], "Release history": [[41, "release-history"]], "What\u2019s new": [[42, "what-s-new"]]}, "indexentries": {"elasticnet (class in skglm)": [[12, "skglm.ElasticNet"]], "__init__() (skglm.elasticnet method)": [[12, "skglm.ElasticNet.__init__"]], "generalizedlinearestimator (class in skglm)": [[13, "skglm.GeneralizedLinearEstimator"]], "__init__() (skglm.generalizedlinearestimator method)": [[13, "skglm.GeneralizedLinearEstimator.__init__"]], "lasso (class in skglm)": [[14, "skglm.Lasso"]], "__init__() (skglm.lasso method)": [[14, "skglm.Lasso.__init__"]], "linearsvc (class in skglm)": [[15, "skglm.LinearSVC"]], "__init__() (skglm.linearsvc method)": [[15, "skglm.LinearSVC.__init__"]], "mcpregression (class in skglm)": [[16, "skglm.MCPRegression"]], "__init__() (skglm.mcpregression method)": [[16, "skglm.MCPRegression.__init__"]], "multitasklasso (class in skglm)": [[17, "skglm.MultiTaskLasso"]], "__init__() (skglm.multitasklasso method)": [[17, "skglm.MultiTaskLasso.__init__"]], "sparselogisticregression (class in skglm)": [[18, "skglm.SparseLogisticRegression"]], "__init__() (skglm.sparselogisticregression method)": [[18, "skglm.SparseLogisticRegression.__init__"]], "weightedlasso (class in skglm)": [[19, "skglm.WeightedLasso"]], "__init__() (skglm.weightedlasso method)": [[19, "skglm.WeightedLasso.__init__"]], "huber (class in skglm.datafits)": [[20, "skglm.datafits.Huber"]], "__init__() (skglm.datafits.huber method)": [[20, "skglm.datafits.Huber.__init__"]], "logistic (class in skglm.datafits)": [[21, "skglm.datafits.Logistic"]], "__init__() (skglm.datafits.logistic method)": [[21, "skglm.datafits.Logistic.__init__"]], "quadratic (class in skglm.datafits)": [[22, "skglm.datafits.Quadratic"]], "__init__() (skglm.datafits.quadratic method)": [[22, "skglm.datafits.Quadratic.__init__"]], "quadraticgroup (class in skglm.datafits)": [[23, "skglm.datafits.QuadraticGroup"]], "__init__() (skglm.datafits.quadraticgroup method)": [[23, "skglm.datafits.QuadraticGroup.__init__"]], "quadraticsvc (class in skglm.datafits)": [[24, "skglm.datafits.QuadraticSVC"]], "__init__() (skglm.datafits.quadraticsvc method)": [[24, "skglm.datafits.QuadraticSVC.__init__"]], "sqrtlasso (class in skglm.experimental)": [[25, "skglm.experimental.SqrtLasso"]], "__init__() (skglm.experimental.sqrtlasso method)": [[25, "skglm.experimental.SqrtLasso.__init__"]], "blockscad (class in skglm.penalties)": [[26, "skglm.penalties.BlockSCAD"]], "__init__() (skglm.penalties.blockscad method)": [[26, "skglm.penalties.BlockSCAD.__init__"]], "indicatorbox (class in skglm.penalties)": [[27, "skglm.penalties.IndicatorBox"]], "__init__() (skglm.penalties.indicatorbox method)": [[27, "skglm.penalties.IndicatorBox.__init__"]], "l0_5 (class in skglm.penalties)": [[28, "skglm.penalties.L0_5"]], "__init__() (skglm.penalties.l0_5 method)": [[28, "skglm.penalties.L0_5.__init__"]], "l1 (class in skglm.penalties)": [[29, "skglm.penalties.L1"]], "__init__() (skglm.penalties.l1 method)": [[29, "skglm.penalties.L1.__init__"]], "l1_plus_l2 (class in skglm.penalties)": [[30, "skglm.penalties.L1_plus_L2"]], "__init__() (skglm.penalties.l1_plus_l2 method)": [[30, "skglm.penalties.L1_plus_L2.__init__"]], "l2_3 (class in skglm.penalties)": [[31, "skglm.penalties.L2_3"]], "__init__() (skglm.penalties.l2_3 method)": [[31, "skglm.penalties.L2_3.__init__"]], "mcpenalty (class in skglm.penalties)": [[32, "skglm.penalties.MCPenalty"]], "__init__() (skglm.penalties.mcpenalty method)": [[32, "skglm.penalties.MCPenalty.__init__"]], "scad (class in skglm.penalties)": [[33, "skglm.penalties.SCAD"]], "__init__() (skglm.penalties.scad method)": [[33, "skglm.penalties.SCAD.__init__"]], "weightedgroupl2 (class in skglm.penalties)": [[34, "skglm.penalties.WeightedGroupL2"]], "__init__() (skglm.penalties.weightedgroupl2 method)": [[34, "skglm.penalties.WeightedGroupL2.__init__"]], "weightedl1 (class in skglm.penalties)": [[35, "skglm.penalties.WeightedL1"]], "__init__() (skglm.penalties.weightedl1 method)": [[35, "skglm.penalties.WeightedL1.__init__"]], "andersoncd (class in skglm.solvers)": [[36, "skglm.solvers.AndersonCD"]], "__init__() (skglm.solvers.andersoncd method)": [[36, "skglm.solvers.AndersonCD.__init__"]], "gramcd (class in skglm.solvers)": [[37, "skglm.solvers.GramCD"]], "__init__() (skglm.solvers.gramcd method)": [[37, "skglm.solvers.GramCD.__init__"]], "groupbcd (class in skglm.solvers)": [[38, "skglm.solvers.GroupBCD"]], "__init__() (skglm.solvers.groupbcd method)": [[38, "skglm.solvers.GroupBCD.__init__"]], "multitaskbcd (class in skglm.solvers)": [[39, "skglm.solvers.MultiTaskBCD"]], "__init__() (skglm.solvers.multitaskbcd method)": [[39, "skglm.solvers.MultiTaskBCD.__init__"]], "proxnewton (class in skglm.solvers)": [[40, "skglm.solvers.ProxNewton"]], "__init__() (skglm.solvers.proxnewton method)": [[40, "skglm.solvers.ProxNewton.__init__"]]}})